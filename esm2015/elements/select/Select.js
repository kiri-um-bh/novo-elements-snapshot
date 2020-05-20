/**
 * @fileoverview added by tsickle
 * Generated from: elements/select/Select.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
// NG
import { FocusMonitor } from '@angular/cdk/a11y';
import { ChangeDetectorRef, Component, ElementRef, EventEmitter, forwardRef, HostListener, Input, NgZone, Output, ViewChild } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { NovoLabelService } from '../../services/novo-label-service';
import { Helpers } from '../../utils/Helpers';
import { KeyCodes } from '../../utils/key-codes/KeyCodes';
// App
import { NovoOverlayTemplateComponent } from '../overlay/Overlay';
// Value accessor for the component (supports ngModel)
/** @type {?} */
const SELECT_VALUE_ACCESSOR = {
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef((/**
     * @return {?}
     */
    () => NovoSelectElement)),
    multi: true,
};
export class NovoSelectElement {
    /**
     * @param {?} element
     * @param {?} labels
     * @param {?} ref
     * @param {?} focusMonitor
     * @param {?} ngZone
     */
    constructor(element, labels, ref, focusMonitor, ngZone) {
        this.element = element;
        this.labels = labels;
        this.ref = ref;
        this.focusMonitor = focusMonitor;
        this.ngZone = ngZone;
        this.placeholder = 'Select...';
        this.onSelect = new EventEmitter();
        this.selectedIndex = -1;
        this.empty = true;
        this.header = {
            open: false,
            valid: true,
            value: '',
        };
        this.onModelChange = (/**
         * @return {?}
         */
        () => { });
        this.onModelTouched = (/**
         * @return {?}
         */
        () => { });
        this.filterTerm = '';
        this.disabled = false;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.focusMonitor.monitor(this.dropdown.nativeElement).subscribe((/**
         * @param {?} origin
         * @return {?}
         */
        (origin) => this.ngZone.run((/**
         * @return {?}
         */
        () => {
            if (origin === 'keyboard' && !this.disabled) {
                this.openPanel();
            }
        }))));
        this.ngOnChanges();
    }
    /**
     * @param {?=} changes
     * @return {?}
     */
    ngOnChanges(changes) {
        this.readonly = this.readonly === true;
        if (this.options && this.options.length && typeof this.options[0] === 'string') {
            this.filteredOptions = this.options.map((/**
             * @param {?} item
             * @return {?}
             */
            (item) => {
                return { value: item, label: item };
            }));
        }
        else {
            this.filteredOptions = (this.options || [])
                .filter((/**
             * @param {?} item
             * @return {?}
             */
            (item) => {
                return !item.readOnly;
            }))
                .map((/**
             * @param {?} element
             * @return {?}
             */
            (element) => {
                return Object.assign({}, element, { active: false });
            }));
        }
        if (!this.model && !this.createdItem) {
            this.clear();
        }
        else if (this.createdItem) {
            /** @type {?} */
            const item = this.options.find((/**
             * @param {?} i
             * @return {?}
             */
            (i) => i.label === this.createdItem));
            /** @type {?} */
            const index = this.options.indexOf(item);
            this.select(item, index);
        }
        else {
            this.writeValue(this.model);
        }
        if (this.panelOpen) {
            this.openPanel();
        }
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this.focusMonitor.stopMonitoring(this.dropdown.nativeElement);
    }
    /**
     * BEGIN: Convienient Panel Methods.
     * @return {?}
     */
    openPanel() {
        this.overlay.openPanel();
    }
    /**
     * @return {?}
     */
    closePanel() {
        this.overlay.closePanel();
    }
    /**
     * @return {?}
     */
    togglePanel() {
        if (this.panelOpen) {
            this.closePanel();
        }
        else {
            setTimeout((/**
             * @return {?}
             */
            () => {
                this.dropdown.nativeElement.focus();
            }));
            this.openPanel();
        }
    }
    /**
     * @return {?}
     */
    get panelOpen() {
        return this.overlay && this.overlay.panelOpen;
    }
    /** END: Convenient Panel Methods. */
    /**
     * This method closes the panel, and if a value is specified, also sets the associated
     * control to that value. It will also mark the control as dirty if this interaction
     * stemmed from the user.
     * @param {?} event
     * @return {?}
     */
    setValueAndClose(event) {
        if (event.value && event.index >= 0) {
            this.select(event.value, event.index);
        }
        this.closePanel();
    }
    /**
     * @param {?} option
     * @param {?} i
     * @param {?=} fireEvents
     * @return {?}
     */
    select(option, i, fireEvents = true) {
        if (this.selected) {
            this.selected.active = false;
        }
        this.selectedIndex = i;
        this.selected = option;
        this.selected.active = true;
        this.empty = false;
        if (fireEvents) {
            this.onModelChange(this.selected.value);
            this.onSelect.emit({ selected: this.selected.value });
        }
    }
    /**
     * @return {?}
     */
    clear() {
        if (this.selected) {
            this.selected.active = false;
        }
        this.selected = {
            label: this.placeholder,
            value: null,
            active: false,
        };
        this.header = {
            open: false,
            valid: true,
            value: '',
        };
        this.selectedIndex = -1;
        this.empty = true;
    }
    /**
     * @param {?} event
     * @return {?}
     */
    onKeyDown(event) {
        // To prevent default window scrolling
        if ([KeyCodes.UP, KeyCodes.DOWN].includes(event.keyCode)) {
            event.preventDefault();
        }
        if ([KeyCodes.ESC, KeyCodes.TAB].includes(event.keyCode)) {
            this.closePanel();
        }
        else if (event.keyCode === KeyCodes.ENTER) {
            if (this.header.open && this.header.value) {
                this.saveHeader();
            }
            else {
                this.setValueAndClose({
                    value: this.filteredOptions[this.selectedIndex],
                    index: this.selectedIndex,
                });
            }
        }
        else if (event.keyCode === KeyCodes.UP) {
            if (!this.panelOpen) {
                this.openPanel();
            }
            if (this.selectedIndex > 0) {
                this.selectedIndex--;
                this.select(this.filteredOptions[this.selectedIndex], this.selectedIndex);
                this.scrollToSelected();
            }
        }
        else if (event.keyCode === KeyCodes.DOWN) {
            if (!this.panelOpen) {
                this.openPanel();
            }
            if (this.selectedIndex < this.filteredOptions.length - 1) {
                this.selectedIndex++;
                this.select(this.filteredOptions[this.selectedIndex], this.selectedIndex);
                this.scrollToSelected();
                if (this.header.open) {
                    this.toggleHeader(null, false);
                }
            }
        }
        else if (event.keyCode === KeyCodes.UP && this.selectedIndex === 0) {
            if (!this.panelOpen) {
                this.openPanel();
            }
            this.selectedIndex--;
            this.toggleHeader(null, true);
        }
        else if ((event.keyCode >= 65 && event.keyCode <= 90) || event.keyCode === KeyCodes.SPACE) {
            if (event.keyCode === KeyCodes.SPACE) {
                event.preventDefault();
            }
            if (!this.panelOpen) {
                this.openPanel();
            }
            clearTimeout(this.filterTermTimeout);
            this.filterTermTimeout = setTimeout((/**
             * @return {?}
             */
            () => {
                this.filterTerm = '';
            }), 2000);
            /** @type {?} */
            const char = String.fromCharCode(event.keyCode);
            this.filterTerm = this.filterTerm.concat(char);
            /** @type {?} */
            const item = this.filteredOptions.find((/**
             * @param {?} i
             * @return {?}
             */
            (i) => i.label.toUpperCase().indexOf(this.filterTerm) === 0));
            if (item) {
                this.select(item, this.filteredOptions.indexOf(item));
                this.scrollToSelected();
            }
        }
        else if ([KeyCodes.BACKSPACE, KeyCodes.DELETE].includes(event.keyCode)) {
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
     * @return {?}
     */
    scrollToSelected() {
        this.scrollToIndex(this.selectedIndex);
    }
    /**
     * @param {?} index
     * @return {?}
     */
    scrollToIndex(index) {
        /** @type {?} */
        const element = this.overlay.overlayRef.overlayElement;
        /** @type {?} */
        const list = element.querySelector('.novo-select-list');
        /** @type {?} */
        const items = list.querySelectorAll('li');
        /** @type {?} */
        const item = items[this.headerConfig ? index + 1 : index];
        if (item) {
            list.scrollTop = item.offsetTop;
        }
    }
    /**
     * @param {?} event
     * @param {?=} forceValue
     * @return {?}
     */
    toggleHeader(event, forceValue = false) {
        if (event) {
            event.stopPropagation();
            event.preventDefault();
        }
        // Reverse the active property (if forceValue, use that)
        this.header = {
            open: forceValue !== undefined ? forceValue : !this.header.open,
            value: '',
            valid: true,
        };
    }
    /**
     * @param {?} match
     * @param {?} query
     * @return {?}
     */
    highlight(match, query) {
        // Replaces the capture string with a the same string inside of a "strong" tag
        return query ? match.replace(new RegExp(this.escapeRegexp(query), 'gi'), '<strong>$&</strong>') : match;
    }
    /**
     * @param {?} queryToEscape
     * @return {?}
     */
    escapeRegexp(queryToEscape) {
        // Ex: if the capture is "a" the result will be \a
        return queryToEscape.replace(/([.?*+^$[\]\\(){}|-])/g, '\\$1');
    }
    /**
     * @return {?}
     */
    saveHeader() {
        if (this.header.value) {
            this.headerConfig.onSave(this.header.value);
            this.createdItem = this.header.value;
            this.closePanel();
        }
        else {
            this.header.valid = false;
        }
    }
    /**
     * @param {?} model
     * @return {?}
     */
    writeValue(model) {
        this.model = model;
        if (this.options) {
            /** @type {?} */
            let item = this.filteredOptions.find((/**
             * @param {?} i
             * @return {?}
             */
            (i) => i.value === model || (model && i.value === model.id)));
            if (!item && !Helpers.isEmpty(model)) {
                item = {
                    label: model,
                    value: model,
                };
                if (!item.readOnly) {
                    this.options.unshift(item);
                }
            }
            if (item) {
                this.select(item, this.filteredOptions.indexOf(item), false);
                this.empty = false;
            }
            else {
                this.clear();
            }
        }
        this.ref.markForCheck();
    }
    /**
     * @param {?} fn
     * @return {?}
     */
    registerOnChange(fn) {
        this.onModelChange = fn;
    }
    /**
     * @param {?} fn
     * @return {?}
     */
    registerOnTouched(fn) {
        this.onModelTouched = fn;
    }
    /**
     * @param {?} disabled
     * @return {?}
     */
    setDisabledState(disabled) {
        this.disabled = disabled;
    }
}
NovoSelectElement.decorators = [
    { type: Component, args: [{
                selector: 'novo-select',
                providers: [SELECT_VALUE_ACCESSOR],
                template: `
    <div #dropdownElement (click)="togglePanel(); (false)" tabIndex="{{ disabled ? -1 : 0 }}" type="button" [class.empty]="empty">
      {{ selected.label }}<i class="bhi-collapse"></i>
    </div>
    <novo-overlay-template [parent]="element" position="center" (closing)="dropdown.nativeElement.focus()">
      <ul class="novo-select-list" tabIndex="-1" [class.header]="headerConfig" [class.active]="panelOpen">
        <ng-content></ng-content>
        <li *ngIf="headerConfig" class="select-header" [class.open]="header.open">
          <button *ngIf="!header.open" (click)="toggleHeader($event); (false)" tabIndex="-1" type="button" class="header">
            <i class="bhi-add-thin"></i>&nbsp;{{ headerConfig.label }}
          </button>
          <div *ngIf="header.open" [ngClass]="{ active: header.open }">
            <input
              autofocus
              type="text"
              [placeholder]="headerConfig.placeholder"
              [attr.id]="name"
              autocomplete="false"
              [(ngModel)]="header.value"
              [ngClass]="{ invalid: !header.valid }"
            />
            <footer>
              <button (click)="toggleHeader($event, false)">{{ labels.cancel }}</button>
              <button (click)="saveHeader()" class="primary">{{ labels.save }}</button>
            </footer>
          </div>
        </li>
        <li
          *ngFor="let option of filteredOptions; let i = index"
          [ngClass]="{ active: option.active }"
          (click)="setValueAndClose({ value: option, index: i })"
          [attr.data-automation-value]="option.label"
        >
          <span [innerHtml]="highlight(option.label, filterTerm)"></span> <i *ngIf="option.active" class="bhi-check"></i>
        </li>
      </ul>
    </novo-overlay-template>
  `,
                host: {
                    '(keydown)': 'onKeyDown($event)',
                }
            }] }
];
/** @nocollapse */
NovoSelectElement.ctorParameters = () => [
    { type: ElementRef },
    { type: NovoLabelService },
    { type: ChangeDetectorRef },
    { type: FocusMonitor },
    { type: NgZone }
];
NovoSelectElement.propDecorators = {
    name: [{ type: Input }],
    options: [{ type: Input }],
    placeholder: [{ type: Input }],
    readonly: [{ type: Input }],
    headerConfig: [{ type: Input }],
    onSelect: [{ type: Output }],
    overlay: [{ type: ViewChild, args: [NovoOverlayTemplateComponent, { static: true },] }],
    dropdown: [{ type: ViewChild, args: ['dropdownElement', { static: true },] }],
    onKeyDown: [{ type: HostListener, args: ['keydown', ['$event'],] }]
};
if (false) {
    /** @type {?} */
    NovoSelectElement.prototype.name;
    /** @type {?} */
    NovoSelectElement.prototype.options;
    /** @type {?} */
    NovoSelectElement.prototype.placeholder;
    /** @type {?} */
    NovoSelectElement.prototype.readonly;
    /** @type {?} */
    NovoSelectElement.prototype.headerConfig;
    /** @type {?} */
    NovoSelectElement.prototype.onSelect;
    /** @type {?} */
    NovoSelectElement.prototype.selectedIndex;
    /** @type {?} */
    NovoSelectElement.prototype.empty;
    /** @type {?} */
    NovoSelectElement.prototype.header;
    /** @type {?} */
    NovoSelectElement.prototype.createdItem;
    /** @type {?} */
    NovoSelectElement.prototype.selected;
    /** @type {?} */
    NovoSelectElement.prototype.model;
    /** @type {?} */
    NovoSelectElement.prototype.onModelChange;
    /** @type {?} */
    NovoSelectElement.prototype.onModelTouched;
    /** @type {?} */
    NovoSelectElement.prototype.filterTerm;
    /** @type {?} */
    NovoSelectElement.prototype.filterTermTimeout;
    /** @type {?} */
    NovoSelectElement.prototype.filteredOptions;
    /** @type {?} */
    NovoSelectElement.prototype.disabled;
    /**
     * Element for the panel containing the autocomplete options.
     * @type {?}
     */
    NovoSelectElement.prototype.overlay;
    /** @type {?} */
    NovoSelectElement.prototype.dropdown;
    /** @type {?} */
    NovoSelectElement.prototype.element;
    /** @type {?} */
    NovoSelectElement.prototype.labels;
    /** @type {?} */
    NovoSelectElement.prototype.ref;
    /**
     * @type {?}
     * @private
     */
    NovoSelectElement.prototype.focusMonitor;
    /**
     * @type {?}
     * @private
     */
    NovoSelectElement.prototype.ngZone;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiU2VsZWN0LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbm92by1lbGVtZW50cy8iLCJzb3VyY2VzIjpbImVsZW1lbnRzL3NlbGVjdC9TZWxlY3QudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQ0EsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBQ2pELE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxTQUFTLEVBQUUsVUFBVSxFQUFFLFlBQVksRUFBRSxVQUFVLEVBQUUsWUFBWSxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQWdDLE1BQU0sRUFBaUIsU0FBUyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ2hNLE9BQU8sRUFBd0IsaUJBQWlCLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUN6RSxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxtQ0FBbUMsQ0FBQztBQUNyRSxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFDOUMsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGdDQUFnQyxDQUFDOztBQUUxRCxPQUFPLEVBQUUsNEJBQTRCLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQzs7O01BRzVELHFCQUFxQixHQUFHO0lBQzVCLE9BQU8sRUFBRSxpQkFBaUI7SUFDMUIsV0FBVyxFQUFFLFVBQVU7OztJQUFDLEdBQUcsRUFBRSxDQUFDLGlCQUFpQixFQUFDO0lBQ2hELEtBQUssRUFBRSxJQUFJO0NBQ1o7QUErQ0QsTUFBTSxPQUFPLGlCQUFpQjs7Ozs7Ozs7SUFxQzVCLFlBQ1MsT0FBbUIsRUFDbkIsTUFBd0IsRUFDeEIsR0FBc0IsRUFDckIsWUFBMEIsRUFDMUIsTUFBYztRQUpmLFlBQU8sR0FBUCxPQUFPLENBQVk7UUFDbkIsV0FBTSxHQUFOLE1BQU0sQ0FBa0I7UUFDeEIsUUFBRyxHQUFILEdBQUcsQ0FBbUI7UUFDckIsaUJBQVksR0FBWixZQUFZLENBQWM7UUFDMUIsV0FBTSxHQUFOLE1BQU0sQ0FBUTtRQXBDeEIsZ0JBQVcs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LGlCQUFpQixFQUFFLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBRTt3QkErSDdDLFlBQVksU0FBQyxTQUFTLEVBQUUsQ0FBQyxRQUFRLENBQUM7Ozs7SUFoS25DLGlDQUNhOztJQUNiLG9DQUNvQjs7SUFDcEIsd0NBQ2tDOztJQUNsQyxxQ0FDa0I7O0lBQ2xCLHlDQUNrQjs7SUFDbEIscUNBQ2lEOztJQUVqRCwwQ0FBMkI7O0lBQzNCLGtDQUFzQjs7SUFDdEIsbUNBSUU7O0lBQ0Ysd0NBQWlCOztJQUNqQixxQ0FBYzs7SUFDZCxrQ0FBVzs7SUFDWCwwQ0FBb0M7O0lBQ3BDLDJDQUFxQzs7SUFDckMsdUNBQXdCOztJQUN4Qiw4Q0FBa0I7O0lBQ2xCLDRDQUFxQjs7SUFDckIscUNBQTBCOzs7OztJQUcxQixvQ0FDc0M7O0lBQ3RDLHFDQUNxQjs7SUFHbkIsb0NBQTBCOztJQUMxQixtQ0FBK0I7O0lBQy9CLGdDQUE2Qjs7Ozs7SUFDN0IseUNBQWtDOzs7OztJQUNsQyxtQ0FBc0IiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBOR1xuaW1wb3J0IHsgRm9jdXNNb25pdG9yIH0gZnJvbSAnQGFuZ3VsYXIvY2RrL2ExMXknO1xuaW1wb3J0IHsgQ2hhbmdlRGV0ZWN0b3JSZWYsIENvbXBvbmVudCwgRWxlbWVudFJlZiwgRXZlbnRFbWl0dGVyLCBmb3J3YXJkUmVmLCBIb3N0TGlzdGVuZXIsIElucHV0LCBOZ1pvbmUsIE9uQ2hhbmdlcywgT25EZXN0cm95LCBPbkluaXQsIE91dHB1dCwgU2ltcGxlQ2hhbmdlcywgVmlld0NoaWxkIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb250cm9sVmFsdWVBY2Nlc3NvciwgTkdfVkFMVUVfQUNDRVNTT1IgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQgeyBOb3ZvTGFiZWxTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vc2VydmljZXMvbm92by1sYWJlbC1zZXJ2aWNlJztcbmltcG9ydCB7IEhlbHBlcnMgfSBmcm9tICcuLi8uLi91dGlscy9IZWxwZXJzJztcbmltcG9ydCB7IEtleUNvZGVzIH0gZnJvbSAnLi4vLi4vdXRpbHMva2V5LWNvZGVzL0tleUNvZGVzJztcbi8vIEFwcFxuaW1wb3J0IHsgTm92b092ZXJsYXlUZW1wbGF0ZUNvbXBvbmVudCB9IGZyb20gJy4uL292ZXJsYXkvT3ZlcmxheSc7XG5cbi8vIFZhbHVlIGFjY2Vzc29yIGZvciB0aGUgY29tcG9uZW50IChzdXBwb3J0cyBuZ01vZGVsKVxuY29uc3QgU0VMRUNUX1ZBTFVFX0FDQ0VTU09SID0ge1xuICBwcm92aWRlOiBOR19WQUxVRV9BQ0NFU1NPUixcbiAgdXNlRXhpc3Rpbmc6IGZvcndhcmRSZWYoKCkgPT4gTm92b1NlbGVjdEVsZW1lbnQpLFxuICBtdWx0aTogdHJ1ZSxcbn07XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ25vdm8tc2VsZWN0JyxcbiAgcHJvdmlkZXJzOiBbU0VMRUNUX1ZBTFVFX0FDQ0VTU09SXSxcbiAgdGVtcGxhdGU6IGBcbiAgICA8ZGl2ICNkcm9wZG93bkVsZW1lbnQgKGNsaWNrKT1cInRvZ2dsZVBhbmVsKCk7IChmYWxzZSlcIiB0YWJJbmRleD1cInt7IGRpc2FibGVkID8gLTEgOiAwIH19XCIgdHlwZT1cImJ1dHRvblwiIFtjbGFzcy5lbXB0eV09XCJlbXB0eVwiPlxuICAgICAge3sgc2VsZWN0ZWQubGFiZWwgfX08aSBjbGFzcz1cImJoaS1jb2xsYXBzZVwiPjwvaT5cbiAgICA8L2Rpdj5cbiAgICA8bm92by1vdmVybGF5LXRlbXBsYXRlIFtwYXJlbnRdPVwiZWxlbWVudFwiIHBvc2l0aW9uPVwiY2VudGVyXCIgKGNsb3NpbmcpPVwiZHJvcGRvd24ubmF0aXZlRWxlbWVudC5mb2N1cygpXCI+XG4gICAgICA8dWwgY2xhc3M9XCJub3ZvLXNlbGVjdC1saXN0XCIgdGFiSW5kZXg9XCItMVwiIFtjbGFzcy5oZWFkZXJdPVwiaGVhZGVyQ29uZmlnXCIgW2NsYXNzLmFjdGl2ZV09XCJwYW5lbE9wZW5cIj5cbiAgICAgICAgPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PlxuICAgICAgICA8bGkgKm5nSWY9XCJoZWFkZXJDb25maWdcIiBjbGFzcz1cInNlbGVjdC1oZWFkZXJcIiBbY2xhc3Mub3Blbl09XCJoZWFkZXIub3BlblwiPlxuICAgICAgICAgIDxidXR0b24gKm5nSWY9XCIhaGVhZGVyLm9wZW5cIiAoY2xpY2spPVwidG9nZ2xlSGVhZGVyKCRldmVudCk7IChmYWxzZSlcIiB0YWJJbmRleD1cIi0xXCIgdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwiaGVhZGVyXCI+XG4gICAgICAgICAgICA8aSBjbGFzcz1cImJoaS1hZGQtdGhpblwiPjwvaT4mbmJzcDt7eyBoZWFkZXJDb25maWcubGFiZWwgfX1cbiAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICA8ZGl2ICpuZ0lmPVwiaGVhZGVyLm9wZW5cIiBbbmdDbGFzc109XCJ7IGFjdGl2ZTogaGVhZGVyLm9wZW4gfVwiPlxuICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgIGF1dG9mb2N1c1xuICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICAgIFtwbGFjZWhvbGRlcl09XCJoZWFkZXJDb25maWcucGxhY2Vob2xkZXJcIlxuICAgICAgICAgICAgICBbYXR0ci5pZF09XCJuYW1lXCJcbiAgICAgICAgICAgICAgYXV0b2NvbXBsZXRlPVwiZmFsc2VcIlxuICAgICAgICAgICAgICBbKG5nTW9kZWwpXT1cImhlYWRlci52YWx1ZVwiXG4gICAgICAgICAgICAgIFtuZ0NsYXNzXT1cInsgaW52YWxpZDogIWhlYWRlci52YWxpZCB9XCJcbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8Zm9vdGVyPlxuICAgICAgICAgICAgICA8YnV0dG9uIChjbGljayk9XCJ0b2dnbGVIZWFkZXIoJGV2ZW50LCBmYWxzZSlcIj57eyBsYWJlbHMuY2FuY2VsIH19PC9idXR0b24+XG4gICAgICAgICAgICAgIDxidXR0b24gKGNsaWNrKT1cInNhdmVIZWFkZXIoKVwiIGNsYXNzPVwicHJpbWFyeVwiPnt7IGxhYmVscy5zYXZlIH19PC9idXR0b24+XG4gICAgICAgICAgICA8L2Zvb3Rlcj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9saT5cbiAgICAgICAgPGxpXG4gICAgICAgICAgKm5nRm9yPVwibGV0IG9wdGlvbiBvZiBmaWx0ZXJlZE9wdGlvbnM7IGxldCBpID0gaW5kZXhcIlxuICAgICAgICAgIFtuZ0NsYXNzXT1cInsgYWN0aXZlOiBvcHRpb24uYWN0aXZlIH1cIlxuICAgICAgICAgIChjbGljayk9XCJzZXRWYWx1ZUFuZENsb3NlKHsgdmFsdWU6IG9wdGlvbiwgaW5kZXg6IGkgfSlcIlxuICAgICAgICAgIFthdHRyLmRhdGEtYXV0b21hdGlvbi12YWx1ZV09XCJvcHRpb24ubGFiZWxcIlxuICAgICAgICA+XG4gICAgICAgICAgPHNwYW4gW2lubmVySHRtbF09XCJoaWdobGlnaHQob3B0aW9uLmxhYmVsLCBmaWx0ZXJUZXJtKVwiPjwvc3Bhbj4gPGkgKm5nSWY9XCJvcHRpb24uYWN0aXZlXCIgY2xhc3M9XCJiaGktY2hlY2tcIj48L2k+XG4gICAgICAgIDwvbGk+XG4gICAgICA8L3VsPlxuICAgIDwvbm92by1vdmVybGF5LXRlbXBsYXRlPlxuICBgLFxuICBob3N0OiB7XG4gICAgJyhrZXlkb3duKSc6ICdvbktleURvd24oJGV2ZW50KScsXG4gIH0sXG59KVxuZXhwb3J0IGNsYXNzIE5vdm9TZWxlY3RFbGVtZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkNoYW5nZXMsIE9uRGVzdHJveSwgQ29udHJvbFZhbHVlQWNjZXNzb3Ige1xuICBASW5wdXQoKVxuICBuYW1lOiBzdHJpbmc7XG4gIEBJbnB1dCgpXG4gIG9wdGlvbnM6IEFycmF5PGFueT47XG4gIEBJbnB1dCgpXG4gIHBsYWNlaG9sZGVyOiBzdHJpbmcgPSAnU2VsZWN0Li4uJztcbiAgQElucHV0KClcbiAgcmVhZG9ubHk6IGJvb2xlYW47XG4gIEBJbnB1dCgpXG4gIGhlYWRlckNvbmZpZzogYW55O1xuICBAT3V0cHV0KClcbiAgb25TZWxlY3Q6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG4gIHNlbGVjdGVkSW5kZXg6IG51bWJlciA9IC0xO1xuICBlbXB0eTogYm9vbGVhbiA9IHRydWU7XG4gIGhlYWRlcjogYW55ID0ge1xuICAgIG9wZW46IGZhbHNlLFxuICAgIHZhbGlkOiB0cnVlLFxuICAgIHZhbHVlOiAnJyxcbiAgfTtcbiAgY3JlYXRlZEl0ZW06IGFueTtcbiAgc2VsZWN0ZWQ6IGFueTtcbiAgbW9kZWw6IGFueTtcbiAgb25Nb2RlbENoYW5nZTogRnVuY3Rpb24gPSAoKSA9PiB7IH07XG4gIG9uTW9kZWxUb3VjaGVkOiBGdW5jdGlvbiA9ICgpID0+IHsgfTtcbiAgZmlsdGVyVGVybTogc3RyaW5nID0gJyc7XG4gIGZpbHRlclRlcm1UaW1lb3V0O1xuICBmaWx0ZXJlZE9wdGlvbnM6IGFueTtcbiAgZGlzYWJsZWQ6IGJvb2xlYW4gPSBmYWxzZTtcblxuICAvKiogRWxlbWVudCBmb3IgdGhlIHBhbmVsIGNvbnRhaW5pbmcgdGhlIGF1dG9jb21wbGV0ZSBvcHRpb25zLiAqL1xuICBAVmlld0NoaWxkKE5vdm9PdmVybGF5VGVtcGxhdGVDb21wb25lbnQsIHsgc3RhdGljOiB0cnVlIH0pXG4gIG92ZXJsYXk6IE5vdm9PdmVybGF5VGVtcGxhdGVDb21wb25lbnQ7XG4gIEBWaWV3Q2hpbGQoJ2Ryb3Bkb3duRWxlbWVudCcsIHsgc3RhdGljOiB0cnVlIH0pXG4gIGRyb3Bkb3duOiBFbGVtZW50UmVmO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHB1YmxpYyBlbGVtZW50OiBFbGVtZW50UmVmLFxuICAgIHB1YmxpYyBsYWJlbHM6IE5vdm9MYWJlbFNlcnZpY2UsXG4gICAgcHVibGljIHJlZjogQ2hhbmdlRGV0ZWN0b3JSZWYsXG4gICAgcHJpdmF0ZSBmb2N1c01vbml0b3I6IEZvY3VzTW9uaXRvcixcbiAgICBwcml2YXRlIG5nWm9uZTogTmdab25lLFxuICApIHsgfVxuXG4gIG5nT25Jbml0KCkge1xuICAgIHRoaXMuZm9jdXNNb25pdG9yLm1vbml0b3IodGhpcy5kcm9wZG93bi5uYXRpdmVFbGVtZW50KS5zdWJzY3JpYmUoKG9yaWdpbikgPT5cbiAgICAgIHRoaXMubmdab25lLnJ1bigoKSA9PiB7XG4gICAgICAgIGlmIChvcmlnaW4gPT09ICdrZXlib2FyZCcgJiYgIXRoaXMuZGlzYWJsZWQpIHtcbiAgICAgICAgICB0aGlzLm9wZW5QYW5lbCgpO1xuICAgICAgICB9XG4gICAgICB9KSxcbiAgICApO1xuICAgIHRoaXMubmdPbkNoYW5nZXMoKTtcbiAgfVxuXG4gIG5nT25DaGFuZ2VzKGNoYW5nZXM/OiBTaW1wbGVDaGFuZ2VzKSB7XG4gICAgdGhpcy5yZWFkb25seSA9IHRoaXMucmVhZG9ubHkgPT09IHRydWU7XG4gICAgaWYgKHRoaXMub3B0aW9ucyAmJiB0aGlzLm9wdGlvbnMubGVuZ3RoICYmIHR5cGVvZiB0aGlzLm9wdGlvbnNbMF0gPT09ICdzdHJpbmcnKSB7XG4gICAgICB0aGlzLmZpbHRlcmVkT3B0aW9ucyA9IHRoaXMub3B0aW9ucy5tYXAoKGl0ZW0pID0+IHtcbiAgICAgICAgcmV0dXJuIHsgdmFsdWU6IGl0ZW0sIGxhYmVsOiBpdGVtIH07XG4gICAgICB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5maWx0ZXJlZE9wdGlvbnMgPSAodGhpcy5vcHRpb25zIHx8IFtdKVxuICAgICAgICAuZmlsdGVyKChpdGVtKSA9PiB7XG4gICAgICAgICAgcmV0dXJuICFpdGVtLnJlYWRPbmx5O1xuICAgICAgICB9KVxuICAgICAgICAubWFwKChlbGVtZW50KSA9PiB7XG4gICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIC4uLmVsZW1lbnQsXG4gICAgICAgICAgICBhY3RpdmU6IGZhbHNlLFxuICAgICAgICAgIH07XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBpZiAoIXRoaXMubW9kZWwgJiYgIXRoaXMuY3JlYXRlZEl0ZW0pIHtcbiAgICAgIHRoaXMuY2xlYXIoKTtcbiAgICB9IGVsc2UgaWYgKHRoaXMuY3JlYXRlZEl0ZW0pIHtcbiAgICAgIGNvbnN0IGl0ZW0gPSB0aGlzLm9wdGlvbnMuZmluZCgoaSkgPT4gaS5sYWJlbCA9PT0gdGhpcy5jcmVhdGVkSXRlbSk7XG4gICAgICBjb25zdCBpbmRleCA9IHRoaXMub3B0aW9ucy5pbmRleE9mKGl0ZW0pO1xuICAgICAgdGhpcy5zZWxlY3QoaXRlbSwgaW5kZXgpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLndyaXRlVmFsdWUodGhpcy5tb2RlbCk7XG4gICAgfVxuICAgIGlmICh0aGlzLnBhbmVsT3Blbikge1xuICAgICAgdGhpcy5vcGVuUGFuZWwoKTtcbiAgICB9XG4gIH1cblxuICBuZ09uRGVzdHJveSgpIHtcbiAgICB0aGlzLmZvY3VzTW9uaXRvci5zdG9wTW9uaXRvcmluZyh0aGlzLmRyb3Bkb3duLm5hdGl2ZUVsZW1lbnQpO1xuICB9XG5cbiAgLyoqIEJFR0lOOiBDb252aWVuaWVudCBQYW5lbCBNZXRob2RzLiAqL1xuICBvcGVuUGFuZWwoKTogdm9pZCB7XG4gICAgdGhpcy5vdmVybGF5Lm9wZW5QYW5lbCgpO1xuICB9XG5cbiAgY2xvc2VQYW5lbCgpOiB2b2lkIHtcbiAgICB0aGlzLm92ZXJsYXkuY2xvc2VQYW5lbCgpO1xuICB9XG5cbiAgdG9nZ2xlUGFuZWwoKTogdm9pZCB7XG4gICAgaWYgKHRoaXMucGFuZWxPcGVuKSB7XG4gICAgICB0aGlzLmNsb3NlUGFuZWwoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIHRoaXMuZHJvcGRvd24ubmF0aXZlRWxlbWVudC5mb2N1cygpO1xuICAgICAgfSk7XG4gICAgICB0aGlzLm9wZW5QYW5lbCgpO1xuICAgIH1cbiAgfVxuXG4gIGdldCBwYW5lbE9wZW4oKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMub3ZlcmxheSAmJiB0aGlzLm92ZXJsYXkucGFuZWxPcGVuO1xuICB9XG4gIC8qKiBFTkQ6IENvbnZlbmllbnQgUGFuZWwgTWV0aG9kcy4gKi9cblxuICAvKipcbiAgICogVGhpcyBtZXRob2QgY2xvc2VzIHRoZSBwYW5lbCwgYW5kIGlmIGEgdmFsdWUgaXMgc3BlY2lmaWVkLCBhbHNvIHNldHMgdGhlIGFzc29jaWF0ZWRcbiAgICogY29udHJvbCB0byB0aGF0IHZhbHVlLiBJdCB3aWxsIGFsc28gbWFyayB0aGUgY29udHJvbCBhcyBkaXJ0eSBpZiB0aGlzIGludGVyYWN0aW9uXG4gICAqIHN0ZW1tZWQgZnJvbSB0aGUgdXNlci5cbiAgICovXG4gIHNldFZhbHVlQW5kQ2xvc2UoZXZlbnQ6IGFueSB8IG51bGwpOiB2b2lkIHtcbiAgICBpZiAoZXZlbnQudmFsdWUgJiYgZXZlbnQuaW5kZXggPj0gMCkge1xuICAgICAgdGhpcy5zZWxlY3QoZXZlbnQudmFsdWUsIGV2ZW50LmluZGV4KTtcbiAgICB9XG4gICAgdGhpcy5jbG9zZVBhbmVsKCk7XG4gIH1cblxuICBzZWxlY3Qob3B0aW9uLCBpLCBmaXJlRXZlbnRzOiBib29sZWFuID0gdHJ1ZSkge1xuICAgIGlmICh0aGlzLnNlbGVjdGVkKSB7XG4gICAgICB0aGlzLnNlbGVjdGVkLmFjdGl2ZSA9IGZhbHNlO1xuICAgIH1cbiAgICB0aGlzLnNlbGVjdGVkSW5kZXggPSBpO1xuICAgIHRoaXMuc2VsZWN0ZWQgPSBvcHRpb247XG4gICAgdGhpcy5zZWxlY3RlZC5hY3RpdmUgPSB0cnVlO1xuICAgIHRoaXMuZW1wdHkgPSBmYWxzZTtcbiAgICBpZiAoZmlyZUV2ZW50cykge1xuICAgICAgdGhpcy5vbk1vZGVsQ2hhbmdlKHRoaXMuc2VsZWN0ZWQudmFsdWUpO1xuICAgICAgdGhpcy5vblNlbGVjdC5lbWl0KHsgc2VsZWN0ZWQ6IHRoaXMuc2VsZWN0ZWQudmFsdWUgfSk7XG4gICAgfVxuICB9XG5cbiAgY2xlYXIoKSB7XG4gICAgaWYgKHRoaXMuc2VsZWN0ZWQpIHtcbiAgICAgIHRoaXMuc2VsZWN0ZWQuYWN0aXZlID0gZmFsc2U7XG4gICAgfVxuICAgIHRoaXMuc2VsZWN0ZWQgPSB7XG4gICAgICBsYWJlbDogdGhpcy5wbGFjZWhvbGRlcixcbiAgICAgIHZhbHVlOiBudWxsLFxuICAgICAgYWN0aXZlOiBmYWxzZSxcbiAgICB9O1xuICAgIHRoaXMuaGVhZGVyID0ge1xuICAgICAgb3BlbjogZmFsc2UsXG4gICAgICB2YWxpZDogdHJ1ZSxcbiAgICAgIHZhbHVlOiAnJyxcbiAgICB9O1xuICAgIHRoaXMuc2VsZWN0ZWRJbmRleCA9IC0xO1xuICAgIHRoaXMuZW1wdHkgPSB0cnVlO1xuICB9XG5cbiAgQEhvc3RMaXN0ZW5lcigna2V5ZG93bicsIFsnJGV2ZW50J10pXG4gIG9uS2V5RG93bihldmVudDogS2V5Ym9hcmRFdmVudCk6IHZvaWQge1xuICAgIC8vIFRvIHByZXZlbnQgZGVmYXVsdCB3aW5kb3cgc2Nyb2xsaW5nXG4gICAgaWYgKFtLZXlDb2Rlcy5VUCwgS2V5Q29kZXMuRE9XTl0uaW5jbHVkZXMoZXZlbnQua2V5Q29kZSkpIHtcbiAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgfVxuICAgIGlmIChbS2V5Q29kZXMuRVNDLCBLZXlDb2Rlcy5UQUJdLmluY2x1ZGVzKGV2ZW50LmtleUNvZGUpKSB7XG4gICAgICB0aGlzLmNsb3NlUGFuZWwoKTtcbiAgICB9IGVsc2UgaWYgKGV2ZW50LmtleUNvZGUgPT09IEtleUNvZGVzLkVOVEVSKSB7XG4gICAgICBpZiAodGhpcy5oZWFkZXIub3BlbiAmJiB0aGlzLmhlYWRlci52YWx1ZSkge1xuICAgICAgICB0aGlzLnNhdmVIZWFkZXIoKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuc2V0VmFsdWVBbmRDbG9zZSh7XG4gICAgICAgICAgdmFsdWU6IHRoaXMuZmlsdGVyZWRPcHRpb25zW3RoaXMuc2VsZWN0ZWRJbmRleF0sXG4gICAgICAgICAgaW5kZXg6IHRoaXMuc2VsZWN0ZWRJbmRleCxcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfSBlbHNlIGlmIChldmVudC5rZXlDb2RlID09PSBLZXlDb2Rlcy5VUCkge1xuICAgICAgaWYgKCF0aGlzLnBhbmVsT3Blbikge1xuICAgICAgICB0aGlzLm9wZW5QYW5lbCgpO1xuICAgICAgfVxuICAgICAgaWYgKHRoaXMuc2VsZWN0ZWRJbmRleCA+IDApIHtcbiAgICAgICAgdGhpcy5zZWxlY3RlZEluZGV4LS07XG4gICAgICAgIHRoaXMuc2VsZWN0KHRoaXMuZmlsdGVyZWRPcHRpb25zW3RoaXMuc2VsZWN0ZWRJbmRleF0sIHRoaXMuc2VsZWN0ZWRJbmRleCk7XG4gICAgICAgIHRoaXMuc2Nyb2xsVG9TZWxlY3RlZCgpO1xuICAgICAgfVxuICAgIH0gZWxzZSBpZiAoZXZlbnQua2V5Q29kZSA9PT0gS2V5Q29kZXMuRE9XTikge1xuICAgICAgaWYgKCF0aGlzLnBhbmVsT3Blbikge1xuICAgICAgICB0aGlzLm9wZW5QYW5lbCgpO1xuICAgICAgfVxuICAgICAgaWYgKHRoaXMuc2VsZWN0ZWRJbmRleCA8IHRoaXMuZmlsdGVyZWRPcHRpb25zLmxlbmd0aCAtIDEpIHtcbiAgICAgICAgdGhpcy5zZWxlY3RlZEluZGV4Kys7XG4gICAgICAgIHRoaXMuc2VsZWN0KHRoaXMuZmlsdGVyZWRPcHRpb25zW3RoaXMuc2VsZWN0ZWRJbmRleF0sIHRoaXMuc2VsZWN0ZWRJbmRleCk7XG4gICAgICAgIHRoaXMuc2Nyb2xsVG9TZWxlY3RlZCgpO1xuICAgICAgICBpZiAodGhpcy5oZWFkZXIub3Blbikge1xuICAgICAgICAgIHRoaXMudG9nZ2xlSGVhZGVyKG51bGwsIGZhbHNlKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0gZWxzZSBpZiAoZXZlbnQua2V5Q29kZSA9PT0gS2V5Q29kZXMuVVAgJiYgdGhpcy5zZWxlY3RlZEluZGV4ID09PSAwKSB7XG4gICAgICBpZiAoIXRoaXMucGFuZWxPcGVuKSB7XG4gICAgICAgIHRoaXMub3BlblBhbmVsKCk7XG4gICAgICB9XG4gICAgICB0aGlzLnNlbGVjdGVkSW5kZXgtLTtcbiAgICAgIHRoaXMudG9nZ2xlSGVhZGVyKG51bGwsIHRydWUpO1xuICAgIH0gZWxzZSBpZiAoKGV2ZW50LmtleUNvZGUgPj0gNjUgJiYgZXZlbnQua2V5Q29kZSA8PSA5MCkgfHwgZXZlbnQua2V5Q29kZSA9PT0gS2V5Q29kZXMuU1BBQ0UpIHtcbiAgICAgIGlmIChldmVudC5rZXlDb2RlID09PSBLZXlDb2Rlcy5TUEFDRSkge1xuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgfVxuICAgICAgaWYgKCF0aGlzLnBhbmVsT3Blbikge1xuICAgICAgICB0aGlzLm9wZW5QYW5lbCgpO1xuICAgICAgfVxuICAgICAgY2xlYXJUaW1lb3V0KHRoaXMuZmlsdGVyVGVybVRpbWVvdXQpO1xuICAgICAgdGhpcy5maWx0ZXJUZXJtVGltZW91dCA9IHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICB0aGlzLmZpbHRlclRlcm0gPSAnJztcbiAgICAgIH0sIDIwMDApO1xuICAgICAgY29uc3QgY2hhciA9IFN0cmluZy5mcm9tQ2hhckNvZGUoZXZlbnQua2V5Q29kZSk7XG4gICAgICB0aGlzLmZpbHRlclRlcm0gPSB0aGlzLmZpbHRlclRlcm0uY29uY2F0KGNoYXIpO1xuICAgICAgY29uc3QgaXRlbSA9IHRoaXMuZmlsdGVyZWRPcHRpb25zLmZpbmQoKGkpID0+IGkubGFiZWwudG9VcHBlckNhc2UoKS5pbmRleE9mKHRoaXMuZmlsdGVyVGVybSkgPT09IDApO1xuICAgICAgaWYgKGl0ZW0pIHtcbiAgICAgICAgdGhpcy5zZWxlY3QoaXRlbSwgdGhpcy5maWx0ZXJlZE9wdGlvbnMuaW5kZXhPZihpdGVtKSk7XG4gICAgICAgIHRoaXMuc2Nyb2xsVG9TZWxlY3RlZCgpO1xuICAgICAgfVxuICAgIH0gZWxzZSBpZiAoW0tleUNvZGVzLkJBQ0tTUEFDRSwgS2V5Q29kZXMuREVMRVRFXS5pbmNsdWRlcyhldmVudC5rZXlDb2RlKSkge1xuICAgICAgY2xlYXJUaW1lb3V0KHRoaXMuZmlsdGVyVGVybVRpbWVvdXQpO1xuICAgICAgdGhpcy5maWx0ZXJUZXJtVGltZW91dCA9IHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICB0aGlzLmZpbHRlclRlcm0gPSAnJztcbiAgICAgIH0sIDIwMDApO1xuICAgICAgdGhpcy5maWx0ZXJUZXJtID0gdGhpcy5maWx0ZXJUZXJtLnNsaWNlKDAsIC0xKTtcbiAgICB9XG4gIH1cblxuICBzY3JvbGxUb1NlbGVjdGVkKCkge1xuICAgIHRoaXMuc2Nyb2xsVG9JbmRleCh0aGlzLnNlbGVjdGVkSW5kZXgpO1xuICB9XG5cbiAgc2Nyb2xsVG9JbmRleChpbmRleDogbnVtYmVyKSB7XG4gICAgY29uc3QgZWxlbWVudCA9IHRoaXMub3ZlcmxheS5vdmVybGF5UmVmLm92ZXJsYXlFbGVtZW50O1xuICAgIGNvbnN0IGxpc3QgPSBlbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJy5ub3ZvLXNlbGVjdC1saXN0Jyk7XG4gICAgY29uc3QgaXRlbXMgPSBsaXN0LnF1ZXJ5U2VsZWN0b3JBbGwoJ2xpJyk7XG4gICAgY29uc3QgaXRlbSA9IGl0ZW1zW3RoaXMuaGVhZGVyQ29uZmlnID8gaW5kZXggKyAxIDogaW5kZXhdO1xuICAgIGlmIChpdGVtKSB7XG4gICAgICBsaXN0LnNjcm9sbFRvcCA9IGl0ZW0ub2Zmc2V0VG9wO1xuICAgIH1cbiAgfVxuXG4gIHRvZ2dsZUhlYWRlcihldmVudCwgZm9yY2VWYWx1ZTogYm9vbGVhbiA9IGZhbHNlKSB7XG4gICAgaWYgKGV2ZW50KSB7XG4gICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgfVxuICAgIC8vIFJldmVyc2UgdGhlIGFjdGl2ZSBwcm9wZXJ0eSAoaWYgZm9yY2VWYWx1ZSwgdXNlIHRoYXQpXG4gICAgdGhpcy5oZWFkZXIgPSB7XG4gICAgICBvcGVuOiBmb3JjZVZhbHVlICE9PSB1bmRlZmluZWQgPyBmb3JjZVZhbHVlIDogIXRoaXMuaGVhZGVyLm9wZW4sXG4gICAgICB2YWx1ZTogJycsXG4gICAgICB2YWxpZDogdHJ1ZSxcbiAgICB9O1xuICB9XG5cbiAgaGlnaGxpZ2h0KG1hdGNoLCBxdWVyeSkge1xuICAgIC8vIFJlcGxhY2VzIHRoZSBjYXB0dXJlIHN0cmluZyB3aXRoIGEgdGhlIHNhbWUgc3RyaW5nIGluc2lkZSBvZiBhIFwic3Ryb25nXCIgdGFnXG4gICAgcmV0dXJuIHF1ZXJ5ID8gbWF0Y2gucmVwbGFjZShuZXcgUmVnRXhwKHRoaXMuZXNjYXBlUmVnZXhwKHF1ZXJ5KSwgJ2dpJyksICc8c3Ryb25nPiQmPC9zdHJvbmc+JykgOiBtYXRjaDtcbiAgfVxuXG4gIGVzY2FwZVJlZ2V4cChxdWVyeVRvRXNjYXBlKSB7XG4gICAgLy8gRXg6IGlmIHRoZSBjYXB0dXJlIGlzIFwiYVwiIHRoZSByZXN1bHQgd2lsbCBiZSBcXGFcbiAgICByZXR1cm4gcXVlcnlUb0VzY2FwZS5yZXBsYWNlKC8oWy4/KiteJFtcXF1cXFxcKCl7fXwtXSkvZywgJ1xcXFwkMScpO1xuICB9XG5cbiAgc2F2ZUhlYWRlcigpIHtcbiAgICBpZiAodGhpcy5oZWFkZXIudmFsdWUpIHtcbiAgICAgIHRoaXMuaGVhZGVyQ29uZmlnLm9uU2F2ZSh0aGlzLmhlYWRlci52YWx1ZSk7XG4gICAgICB0aGlzLmNyZWF0ZWRJdGVtID0gdGhpcy5oZWFkZXIudmFsdWU7XG4gICAgICB0aGlzLmNsb3NlUGFuZWwoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5oZWFkZXIudmFsaWQgPSBmYWxzZTtcbiAgICB9XG4gIH1cblxuICB3cml0ZVZhbHVlKG1vZGVsOiBhbnkpOiB2b2lkIHtcbiAgICB0aGlzLm1vZGVsID0gbW9kZWw7XG4gICAgaWYgKHRoaXMub3B0aW9ucykge1xuICAgICAgbGV0IGl0ZW0gPSB0aGlzLmZpbHRlcmVkT3B0aW9ucy5maW5kKChpKSA9PiBpLnZhbHVlID09PSBtb2RlbCB8fCAobW9kZWwgJiYgaS52YWx1ZSA9PT0gbW9kZWwuaWQpKTtcbiAgICAgIGlmICghaXRlbSAmJiAhSGVscGVycy5pc0VtcHR5KG1vZGVsKSkge1xuICAgICAgICBpdGVtID0ge1xuICAgICAgICAgIGxhYmVsOiBtb2RlbCxcbiAgICAgICAgICB2YWx1ZTogbW9kZWwsXG4gICAgICAgIH07XG4gICAgICAgIGlmICghaXRlbS5yZWFkT25seSkge1xuICAgICAgICAgIHRoaXMub3B0aW9ucy51bnNoaWZ0KGl0ZW0pO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoaXRlbSkge1xuICAgICAgICB0aGlzLnNlbGVjdChpdGVtLCB0aGlzLmZpbHRlcmVkT3B0aW9ucy5pbmRleE9mKGl0ZW0pLCBmYWxzZSk7XG4gICAgICAgIHRoaXMuZW1wdHkgPSBmYWxzZTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuY2xlYXIoKTtcbiAgICAgIH1cbiAgICB9XG4gICAgdGhpcy5yZWYubWFya0ZvckNoZWNrKCk7XG4gIH1cblxuICByZWdpc3Rlck9uQ2hhbmdlKGZuOiBGdW5jdGlvbik6IHZvaWQge1xuICAgIHRoaXMub25Nb2RlbENoYW5nZSA9IGZuO1xuICB9XG5cbiAgcmVnaXN0ZXJPblRvdWNoZWQoZm46IEZ1bmN0aW9uKTogdm9pZCB7XG4gICAgdGhpcy5vbk1vZGVsVG91Y2hlZCA9IGZuO1xuICB9XG5cbiAgc2V0RGlzYWJsZWRTdGF0ZShkaXNhYmxlZDogYm9vbGVhbik6IHZvaWQge1xuICAgIHRoaXMuZGlzYWJsZWQgPSBkaXNhYmxlZDtcbiAgfVxufVxuIl19