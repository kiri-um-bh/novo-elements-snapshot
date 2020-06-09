/**
 * @fileoverview added by tsickle
 * Generated from: elements/chips/Chips.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
// NG2
import { Component, EventEmitter, Input, Output, forwardRef, ElementRef, ViewChild, ViewContainerRef } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
// Vendor
import { ReplaySubject } from 'rxjs';
import { coerceBooleanProperty } from '@angular/cdk/coercion';
// APP
import { KeyCodes } from '../../utils/key-codes/KeyCodes';
import { Helpers } from '../../utils/Helpers';
import { NovoLabelService } from '../../services/novo-label-service';
import { ComponentUtils } from '../../utils/component-utils/ComponentUtils';
// Value accessor for the component (supports ngModel)
/** @type {?} */
const CHIPS_VALUE_ACCESSOR = {
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef((/**
     * @return {?}
     */
    () => NovoChipsElement)),
    multi: true,
};
export class NovoChipElement {
    constructor() {
        this.disabled = false;
        this.select = new EventEmitter();
        this.remove = new EventEmitter();
        this.deselect = new EventEmitter();
    }
    /**
     * @param {?} type
     * @return {?}
     */
    set type(type) {
        this._type = type ? type.toLowerCase() : null;
    }
    /**
     * @param {?} e
     * @return {?}
     */
    onRemove(e) {
        if (e) {
            e.stopPropagation();
            e.preventDefault();
        }
        this.remove.emit(e);
        return false;
    }
    /**
     * @param {?} e
     * @return {?}
     */
    onSelect(e) {
        if (e) {
            e.stopPropagation();
            e.preventDefault();
        }
        this.select.emit(e);
        return false;
    }
    /**
     * @param {?} e
     * @return {?}
     */
    onDeselect(e) {
        if (e) {
            e.stopPropagation();
            e.preventDefault();
        }
        this.deselect.emit(e);
        return false;
    }
}
NovoChipElement.decorators = [
    { type: Component, args: [{
                selector: 'chip,novo-chip',
                template: `
        <span (click)="onSelect($event)" (mouseenter)="onSelect($event)" (mouseleave)="onDeselect($event)" [ngClass]="_type">
            <i *ngIf="_type" class="bhi-circle"></i>
            <span><ng-content></ng-content></span>
        </span>
        <i class="bhi-close" *ngIf="!disabled" (click)="onRemove($event)"></i>
    `
            }] }
];
NovoChipElement.propDecorators = {
    type: [{ type: Input }],
    disabled: [{ type: Input }],
    select: [{ type: Output }],
    remove: [{ type: Output }],
    deselect: [{ type: Output }]
};
if (false) {
    /** @type {?} */
    NovoChipElement.prototype.disabled;
    /** @type {?} */
    NovoChipElement.prototype.select;
    /** @type {?} */
    NovoChipElement.prototype.remove;
    /** @type {?} */
    NovoChipElement.prototype.deselect;
    /** @type {?} */
    NovoChipElement.prototype.entity;
    /** @type {?} */
    NovoChipElement.prototype._type;
}
export class NovoChipsElement {
    /**
     * @param {?} element
     * @param {?} componentUtils
     * @param {?} labels
     */
    constructor(element, componentUtils, labels) {
        this.element = element;
        this.componentUtils = componentUtils;
        this.labels = labels;
        this.closeOnSelect = false;
        this.placeholder = '';
        this._disablePickerInput = false;
        this.changed = new EventEmitter();
        this.focus = new EventEmitter();
        this.blur = new EventEmitter();
        this.typing = new EventEmitter();
        this.items = [];
        this.selected = null;
        this.config = {};
        // private data model
        this._value = '';
        this._items = new ReplaySubject(1);
        // Placeholders for the callbacks
        this.onModelChange = (/**
         * @return {?}
         */
        () => { });
        this.onModelTouched = (/**
         * @return {?}
         */
        () => { });
    }
    /**
     * @param {?} v
     * @return {?}
     */
    set disablePickerInput(v) {
        this._disablePickerInput = coerceBooleanProperty(v);
    }
    /**
     * @return {?}
     */
    get disablePickerInput() {
        return this._disablePickerInput;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.setItems();
    }
    /**
     * @return {?}
     */
    get value() {
        return this._value;
    }
    /**
     * @param {?} selected
     * @return {?}
     */
    set value(selected) {
        this.itemToAdd = '';
        if (selected !== this._value) {
            this._value = selected;
            this.changed.emit({ value: selected, rawValue: this.items });
            this.onModelChange(selected);
        }
    }
    /**
     * @return {?}
     */
    clearValue() {
        this.items = [];
        this._items.next(this.items);
        this.value = null;
        this.changed.emit({ value: this.value, rawValue: this.items });
        this.onModelChange(this.value);
    }
    /**
     * @return {?}
     */
    setItems() {
        this.items = [];
        if (this.model && Array.isArray(this.model)) {
            /** @type {?} */
            const noLabels = [];
            for (const value of this.model) {
                /** @type {?} */
                let label;
                if (this.source && this.source.format && Helpers.validateInterpolationProps(this.source.format, value)) {
                    label = Helpers.interpolate(this.source.format, value);
                }
                if (this.source && label && label !== this.source.format) {
                    this.items.push({
                        value,
                        label,
                    });
                }
                else if (this.source.getLabels && typeof this.source.getLabels === 'function') {
                    noLabels.push(value);
                }
                else if (this.source.options && Array.isArray(this.source.options)) {
                    this.items.push(this.getLabelFromOptions(value));
                }
                else if (this.source.categoryMap && this.source.categoryMap.size) {
                    this.items.push(value);
                }
                else {
                    this.items.push({
                        value,
                        label: value,
                    });
                }
            }
            if (noLabels.length > 0 && this.source && this.source.getLabels && typeof this.source.getLabels === 'function') {
                this.source.getLabels(noLabels).then((/**
                 * @param {?} result
                 * @return {?}
                 */
                (result) => {
                    for (const value of result) {
                        if (value.hasOwnProperty('label')) {
                            this.items.push({
                                value,
                                label: value.label,
                            });
                        }
                        else if (this.source.options && Array.isArray(this.source.options)) {
                            this.items.push(this.getLabelFromOptions(value));
                        }
                        else {
                            this.items.push(value);
                        }
                    }
                    this._items.next(this.items);
                }));
            }
        }
        this.changed.emit({ value: this.model, rawValue: this.items });
        this._items.next(this.items);
    }
    /**
     * @param {?} value
     * @return {?}
     */
    getLabelFromOptions(value) {
        /** @type {?} */
        let id = value;
        /** @type {?} */
        let optLabel = this.source.options.find((/**
         * @param {?} val
         * @return {?}
         */
        (val) => val.value === value));
        if (!optLabel && value.hasOwnProperty('id')) {
            optLabel = this.source.options.find((/**
             * @param {?} val
             * @return {?}
             */
            (val) => val.value === value.id));
            id = value.id;
        }
        return {
            value: id,
            label: optLabel ? optLabel.label : value,
        };
    }
    /**
     * @param {?=} event
     * @return {?}
     */
    deselectAll(event) {
        this.selected = null;
        this.hidePreview();
    }
    /**
     * @param {?=} event
     * @param {?=} item
     * @return {?}
     */
    select(event, item) {
        this.blur.emit(event);
        this.deselectAll();
        this.selected = item;
        this.showPreview();
    }
    /**
     * @param {?=} event
     * @param {?=} item
     * @return {?}
     */
    deselect(event, item) {
        this.blur.emit(event);
        this.deselectAll();
    }
    /**
     * @param {?=} event
     * @return {?}
     */
    onTyping(event) {
        this.typing.emit(event);
    }
    /**
     * @param {?=} event
     * @return {?}
     */
    onFocus(event) {
        this.deselectAll();
        this.element.nativeElement.classList.add('selected');
        this.focus.emit(event);
    }
    /**
     * @param {?} event
     * @return {?}
     */
    add(event) {
        if (event && !(event instanceof Event)) {
            this.items.push(event);
            this.value = this.source && this.source.valueFormatter ? this.source.valueFormatter(this.items) : this.items.map((/**
             * @param {?} i
             * @return {?}
             */
            (i) => i.value));
            // Set focus on the picker
            /** @type {?} */
            const input = this.element.nativeElement.querySelector('novo-picker > input');
            if (input) {
                input.focus();
            }
        }
        this._items.next(this.items);
    }
    /**
     * @param {?} event
     * @param {?} item
     * @return {?}
     */
    remove(event, item) {
        if (event) {
            event.stopPropagation();
            event.preventDefault();
        }
        this.items.splice(this.items.indexOf(item), 1);
        this.deselectAll();
        this.value = this.source && this.source.valueFormatter ? this.source.valueFormatter(this.items) : this.items.map((/**
         * @param {?} i
         * @return {?}
         */
        (i) => i.value));
        this.changed.emit({ value: this.value.length ? this.value : '', rawValue: this.items });
        this.onModelChange(this.value.length ? this.value : '');
        this._items.next(this.items);
    }
    /**
     * @param {?} event
     * @return {?}
     */
    onKeyDown(event) {
        if (event.keyCode === KeyCodes.BACKSPACE) {
            if (event.target && event.target.value.length === 0 && this.items.length) {
                if (event) {
                    event.stopPropagation();
                    event.preventDefault();
                }
                if (this.selected) {
                    this.remove(event, this.selected);
                }
                else {
                    this.select(event, this.items[this.items.length - 1]);
                }
            }
        }
    }
    // Set touched on blur
    /**
     * @param {?} e
     * @return {?}
     */
    onTouched(e) {
        this.element.nativeElement.classList.remove('selected');
        this.onModelTouched();
        this.blur.emit(e);
    }
    /**
     * @param {?} model
     * @return {?}
     */
    writeValue(model) {
        this.model = model;
        this.setItems();
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
        this._disablePickerInput = disabled;
    }
    /**
     * \@description This method creates an instance of the preview (called popup) and adds all the bindings to that
     * instance. Will reuse the popup or create a new one if it does not already exist. Will only work if there is
     * a previewTemplate given in the config.
     * @return {?}
     */
    showPreview() {
        if (this.source.previewTemplate) {
            if (!this.popup) {
                this.popup = this.componentUtils.append(this.source.previewTemplate, this.preview);
            }
            this.popup.instance.match = this.selected;
        }
    }
    /**
     * \@description - This method deletes the preview popup from the DOM.
     * @return {?}
     */
    hidePreview() {
        if (this.popup) {
            this.popup.destroy();
            this.popup = null;
        }
    }
}
NovoChipsElement.decorators = [
    { type: Component, args: [{
                selector: 'chips,novo-chips',
                providers: [CHIPS_VALUE_ACCESSOR],
                template: `
        <div class="novo-chip-container">
          <novo-chip
              *ngFor="let item of _items | async"
              [type]="type || item?.value?.searchEntity"
              [class.selected]="item == selected"
              [disabled]="disablePickerInput"
              (remove)="remove($event, item)"
              (select)="select($event, item)"
              (deselect)="deselect($event, item)">
              {{ item.label }}
          </novo-chip>
        </div>
        <div class="chip-input-container" *ngIf="!maxlength || (maxlength && items.length < maxlength)">
            <novo-picker
                clearValueOnSelect="true"
                [closeOnSelect]="closeOnSelect"
                [config]="source"
                [disablePickerInput]="disablePickerInput"
                [placeholder]="placeholder"
                [(ngModel)]="itemToAdd"
                (select)="add($event)"
                (keydown)="onKeyDown($event)"
                (focus)="onFocus($event)"
                (typing)="onTyping($event)"
                (blur)="onTouched($event)"
                [selected]="items"
                [overrideElement]="element">
            </novo-picker>
        </div>
        <div class="preview-container">
            <span #preview></span>
        </div>
        <i class="bhi-search" [class.has-value]="items.length" *ngIf="!disablePickerInput"></i>
        <label class="clear-all" *ngIf="items.length && !disablePickerInput" (click)="clearValue()">{{ labels.clearAll }} <i class="bhi-times"></i></label>
   `,
                host: {
                    '[class.with-value]': 'items.length > 0',
                    '[class.disabled]': 'disablePickerInput',
                }
            }] }
];
/** @nocollapse */
NovoChipsElement.ctorParameters = () => [
    { type: ElementRef },
    { type: ComponentUtils },
    { type: NovoLabelService }
];
NovoChipsElement.propDecorators = {
    closeOnSelect: [{ type: Input }],
    placeholder: [{ type: Input }],
    source: [{ type: Input }],
    maxlength: [{ type: Input }],
    type: [{ type: Input }],
    disablePickerInput: [{ type: Input }],
    changed: [{ type: Output }],
    focus: [{ type: Output }],
    blur: [{ type: Output }],
    typing: [{ type: Output }],
    preview: [{ type: ViewChild, args: ['preview', { read: ViewContainerRef, static: false },] }],
    value: [{ type: Input }]
};
if (false) {
    /** @type {?} */
    NovoChipsElement.prototype.closeOnSelect;
    /** @type {?} */
    NovoChipsElement.prototype.placeholder;
    /** @type {?} */
    NovoChipsElement.prototype.source;
    /** @type {?} */
    NovoChipsElement.prototype.maxlength;
    /** @type {?} */
    NovoChipsElement.prototype.type;
    /**
     * @type {?}
     * @private
     */
    NovoChipsElement.prototype._disablePickerInput;
    /** @type {?} */
    NovoChipsElement.prototype.changed;
    /** @type {?} */
    NovoChipsElement.prototype.focus;
    /** @type {?} */
    NovoChipsElement.prototype.blur;
    /** @type {?} */
    NovoChipsElement.prototype.typing;
    /** @type {?} */
    NovoChipsElement.prototype.preview;
    /** @type {?} */
    NovoChipsElement.prototype.items;
    /** @type {?} */
    NovoChipsElement.prototype.selected;
    /** @type {?} */
    NovoChipsElement.prototype.config;
    /** @type {?} */
    NovoChipsElement.prototype.model;
    /** @type {?} */
    NovoChipsElement.prototype.itemToAdd;
    /** @type {?} */
    NovoChipsElement.prototype.popup;
    /** @type {?} */
    NovoChipsElement.prototype._value;
    /** @type {?} */
    NovoChipsElement.prototype._items;
    /** @type {?} */
    NovoChipsElement.prototype.onModelChange;
    /** @type {?} */
    NovoChipsElement.prototype.onModelTouched;
    /** @type {?} */
    NovoChipsElement.prototype.element;
    /**
     * @type {?}
     * @private
     */
    NovoChipsElement.prototype.componentUtils;
    /** @type {?} */
    NovoChipsElement.prototype.labels;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ2hpcHMuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9ub3ZvLWVsZW1lbnRzLyIsInNvdXJjZXMiOlsiZWxlbWVudHMvY2hpcHMvQ2hpcHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQ0EsT0FBTyxFQUFFLFNBQVMsRUFBRSxZQUFZLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxVQUFVLEVBQUUsVUFBVSxFQUFVLFNBQVMsRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNwSSxPQUFPLEVBQUUsaUJBQWlCLEVBQXdCLE1BQU0sZ0JBQWdCLENBQUM7O0FBRXpFLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDckMsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sdUJBQXVCLENBQUM7O0FBRTlELE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxnQ0FBZ0MsQ0FBQztBQUMxRCxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFDOUMsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sbUNBQW1DLENBQUM7QUFDckUsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLDRDQUE0QyxDQUFDOzs7TUFHdEUsb0JBQW9CLEdBQUc7SUFDM0IsT0FBTyxFQUFFLGlCQUFpQjtJQUMxQixXQUFXLEVBQUUsVUFBVTs7O0lBQUMsR0FBRyxFQUFFLENBQUMsZ0JBQWdCLEVBQUM7SUFDL0MsS0FBSyxFQUFFLElBQUk7Q0FDWjtBQVlELE1BQU0sT0FBTyxlQUFlO0lBVjVCO1FBaUJFLGFBQVEsR0FBWSxLQUFLLENBQUM7UUFHMUIsV0FBTSxHQUFzQixJQUFJLFlBQVksRUFBRSxDQUFDO1FBRS9DLFdBQU0sR0FBc0IsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUUvQyxhQUFRLEdBQXNCLElBQUksWUFBWSxFQUFFLENBQUM7SUErQm5ELENBQUM7Ozs7O0lBNUNDLElBQ0ksSUFBSSxDQUFDLElBQVk7UUFDbkIsSUFBSSxDQUFDLEtB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dEROLHlDQUMrQjs7SUFDL0IsdUNBQ3lCOztJQUN6QixrQ0FDWTs7SUFDWixxQ0FDZTs7SUFDZixnQ0FDVTs7Ozs7SUFRViwrQ0FBNkM7O0lBRTdDLG1DQUNnRDs7SUFDaEQsaUNBQzhDOztJQUM5QyxnQ0FDNkM7O0lBQzdDLGtDQUMrQzs7SUFFL0MsbUNBQzBCOztJQUUxQixpQ0FBdUI7O0lBQ3ZCLG9DQUFxQjs7SUFDckIsa0NBQWlCOztJQUNqQixpQ0FBVzs7SUFDWCxxQ0FBZTs7SUFDZixpQ0FBVzs7SUFFWCxrQ0FBaUI7O0lBQ2pCLGtDQUE4Qjs7SUFFOUIseUNBQW1DOztJQUNuQywwQ0FBb0M7O0lBRXhCLG1DQUEwQjs7Ozs7SUFBRSwwQ0FBc0M7O0lBQUUsa0NBQStCIiwic291cmNlc0NvbnRlbnQiOlsiLy8gTkcyXG5pbXBvcnQgeyBDb21wb25lbnQsIEV2ZW50RW1pdHRlciwgSW5wdXQsIE91dHB1dCwgZm9yd2FyZFJlZiwgRWxlbWVudFJlZiwgT25Jbml0LCBWaWV3Q2hpbGQsIFZpZXdDb250YWluZXJSZWYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE5HX1ZBTFVFX0FDQ0VTU09SLCBDb250cm9sVmFsdWVBY2Nlc3NvciB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbi8vIFZlbmRvclxuaW1wb3J0IHsgUmVwbGF5U3ViamVjdCB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgY29lcmNlQm9vbGVhblByb3BlcnR5IH0gZnJvbSAnQGFuZ3VsYXIvY2RrL2NvZXJjaW9uJztcbi8vIEFQUFxuaW1wb3J0IHsgS2V5Q29kZXMgfSBmcm9tICcuLi8uLi91dGlscy9rZXktY29kZXMvS2V5Q29kZXMnO1xuaW1wb3J0IHsgSGVscGVycyB9IGZyb20gJy4uLy4uL3V0aWxzL0hlbHBlcnMnO1xuaW1wb3J0IHsgTm92b0xhYmVsU2VydmljZSB9IGZyb20gJy4uLy4uL3NlcnZpY2VzL25vdm8tbGFiZWwtc2VydmljZSc7XG5pbXBvcnQgeyBDb21wb25lbnRVdGlscyB9IGZyb20gJy4uLy4uL3V0aWxzL2NvbXBvbmVudC11dGlscy9Db21wb25lbnRVdGlscyc7XG5cbi8vIFZhbHVlIGFjY2Vzc29yIGZvciB0aGUgY29tcG9uZW50IChzdXBwb3J0cyBuZ01vZGVsKVxuY29uc3QgQ0hJUFNfVkFMVUVfQUNDRVNTT1IgPSB7XG4gIHByb3ZpZGU6IE5HX1ZBTFVFX0FDQ0VTU09SLFxuICB1c2VFeGlzdGluZzogZm9yd2FyZFJlZigoKSA9PiBOb3ZvQ2hpcHNFbGVtZW50KSxcbiAgbXVsdGk6IHRydWUsXG59O1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdjaGlwLG5vdm8tY2hpcCcsXG4gIHRlbXBsYXRlOiBgXG4gICAgICAgIDxzcGFuIChjbGljayk9XCJvblNlbGVjdCgkZXZlbnQpXCIgKG1vdXNlZW50ZXIpPVwib25TZWxlY3QoJGV2ZW50KVwiIChtb3VzZWxlYXZlKT1cIm9uRGVzZWxlY3QoJGV2ZW50KVwiIFtuZ0NsYXNzXT1cIl90eXBlXCI+XG4gICAgICAgICAgICA8aSAqbmdJZj1cIl90eXBlXCIgY2xhc3M9XCJiaGktY2lyY2xlXCI+PC9pPlxuICAgICAgICAgICAgPHNwYW4+PG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50Pjwvc3Bhbj5cbiAgICAgICAgPC9zcGFuPlxuICAgICAgICA8aSBjbGFzcz1cImJoaS1jbG9zZVwiICpuZ0lmPVwiIWRpc2FibGVkXCIgKGNsaWNrKT1cIm9uUmVtb3ZlKCRldmVudClcIj48L2k+XG4gICAgYCxcbn0pXG5leHBvcnQgY2xhc3MgTm92b0NoaXBFbGVtZW50IHtcbiAgQElucHV0KClcbiAgc2V0IHR5cGUodHlwZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fdHlwZSA9IHR5cGUgPyB0eXBlLnRvTG93ZXJDYXNlKCkgOiBudWxsO1xuICB9XG5cbiAgQElucHV0KClcbiAgZGlzYWJsZWQ6IGJvb2xlYW4gPSBmYWxzZTtcblxuICBAT3V0cHV0KClcbiAgc2VsZWN0OiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgQE91dHB1dCgpXG4gIHJlbW92ZTogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gIEBPdXRwdXQoKVxuICBkZXNlbGVjdDogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cbiAgZW50aXR5OiBzdHJpbmc7XG4gIF90eXBlOiBzdHJpbmc7XG5cbiAgb25SZW1vdmUoZSkge1xuICAgIGlmIChlKSB7XG4gICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIH1cbiAgICB0aGlzLnJlbW92ZS5lbWl0KGUpO1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIG9uU2VsZWN0KGUpIHtcbiAgICBpZiAoZSkge1xuICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICB9XG4gICAgdGhpcy5zZWxlY3QuZW1pdChlKTtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBvbkRlc2VsZWN0KGUpIHtcbiAgICBpZiAoZSkge1xuICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICB9XG4gICAgdGhpcy5kZXNlbGVjdC5lbWl0KGUpO1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxufVxuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdjaGlwcyxub3ZvLWNoaXBzJyxcbiAgcHJvdmlkZXJzOiBbQ0hJUFNfVkFMVUVfQUNDRVNTT1JdLFxuICB0ZW1wbGF0ZTogYFxuICAgICAgICA8ZGl2IGNsYXNzPVwibm92by1jaGlwLWNvbnRhaW5lclwiPlxuICAgICAgICAgIDxub3ZvLWNoaXBcbiAgICAgICAgICAgICAgKm5nRm9yPVwibGV0IGl0ZW0gb2YgX2l0ZW1zIHwgYXN5bmNcIlxuICAgICAgICAgICAgICBbdHlwZV09XCJ0eXBlIHx8IGl0ZW0/LnZhbHVlPy5zZWFyY2hFbnRpdHlcIlxuICAgICAgICAgICAgICBbY2xhc3Muc2VsZWN0ZWRdPVwiaXRlbSA9PSBzZWxlY3RlZFwiXG4gICAgICAgICAgICAgIFtkaXNhYmxlZF09XCJkaXNhYmxlUGlja2VySW5wdXRcIlxuICAgICAgICAgICAgICAocmVtb3ZlKT1cInJlbW92ZSgkZXZlbnQsIGl0ZW0pXCJcbiAgICAgICAgICAgICAgKHNlbGVjdCk9XCJzZWxlY3QoJGV2ZW50LCBpdGVtKVwiXG4gICAgICAgICAgICAgIChkZXNlbGVjdCk9XCJkZXNlbGVjdCgkZXZlbnQsIGl0ZW0pXCI+XG4gICAgICAgICAgICAgIHt7IGl0ZW0ubGFiZWwgfX1cbiAgICAgICAgICA8L25vdm8tY2hpcD5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJjaGlwLWlucHV0LWNvbnRhaW5lclwiICpuZ0lmPVwiIW1heGxlbmd0aCB8fCAobWF4bGVuZ3RoICYmIGl0ZW1zLmxlbmd0aCA8IG1heGxlbmd0aClcIj5cbiAgICAgICAgICAgIDxub3ZvLXBpY2tlclxuICAgICAgICAgICAgICAgIGNsZWFyVmFsdWVPblNlbGVjdD1cInRydWVcIlxuICAgICAgICAgICAgICAgIFtjbG9zZU9uU2VsZWN0XT1cImNsb3NlT25TZWxlY3RcIlxuICAgICAgICAgICAgICAgIFtjb25maWddPVwic291cmNlXCJcbiAgICAgICAgICAgICAgICBbZGlzYWJsZVBpY2tlcklucHV0XT1cImRpc2FibGVQaWNrZXJJbnB1dFwiXG4gICAgICAgICAgICAgICAgW3BsYWNlaG9sZGVyXT1cInBsYWNlaG9sZGVyXCJcbiAgICAgICAgICAgICAgICBbKG5nTW9kZWwpXT1cIml0ZW1Ub0FkZFwiXG4gICAgICAgICAgICAgICAgKHNlbGVjdCk9XCJhZGQoJGV2ZW50KVwiXG4gICAgICAgICAgICAgICAgKGtleWRvd24pPVwib25LZXlEb3duKCRldmVudClcIlxuICAgICAgICAgICAgICAgIChmb2N1cyk9XCJvbkZvY3VzKCRldmVudClcIlxuICAgICAgICAgICAgICAgICh0eXBpbmcpPVwib25UeXBpbmcoJGV2ZW50KVwiXG4gICAgICAgICAgICAgICAgKGJsdXIpPVwib25Ub3VjaGVkKCRldmVudClcIlxuICAgICAgICAgICAgICAgIFtzZWxlY3RlZF09XCJpdGVtc1wiXG4gICAgICAgICAgICAgICAgW292ZXJyaWRlRWxlbWVudF09XCJlbGVtZW50XCI+XG4gICAgICAgICAgICA8L25vdm8tcGlja2VyPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzcz1cInByZXZpZXctY29udGFpbmVyXCI+XG4gICAgICAgICAgICA8c3BhbiAjcHJldmlldz48L3NwYW4+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8aSBjbGFzcz1cImJoaS1zZWFyY2hcIiBbY2xhc3MuaGFzLXZhbHVlXT1cIml0ZW1zLmxlbmd0aFwiICpuZ0lmPVwiIWRpc2FibGVQaWNrZXJJbnB1dFwiPjwvaT5cbiAgICAgICAgPGxhYmVsIGNsYXNzPVwiY2xlYXItYWxsXCIgKm5nSWY9XCJpdGVtcy5sZW5ndGggJiYgIWRpc2FibGVQaWNrZXJJbnB1dFwiIChjbGljayk9XCJjbGVhclZhbHVlKClcIj57eyBsYWJlbHMuY2xlYXJBbGwgfX0gPGkgY2xhc3M9XCJiaGktdGltZXNcIj48L2k+PC9sYWJlbD5cbiAgIGAsXG4gIGhvc3Q6IHtcbiAgICAnW2NsYXNzLndpdGgtdmFsdWVdJzogJ2l0ZW1zLmxlbmd0aCA+IDAnLFxuICAgICdbY2xhc3MuZGlzYWJsZWRdJzogJ2Rpc2FibGVQaWNrZXJJbnB1dCcsXG4gIH0sXG59KVxuZXhwb3J0IGNsYXNzIE5vdm9DaGlwc0VsZW1lbnQgaW1wbGVtZW50cyBPbkluaXQsIENvbnRyb2xWYWx1ZUFjY2Vzc29yIHtcbiAgQElucHV0KClcbiAgY2xvc2VPblNlbGVjdDogYm9vbGVhbiA9IGZhbHNlO1xuICBASW5wdXQoKVxuICBwbGFjZWhvbGRlcjogc3RyaW5nID0gJyc7XG4gIEBJbnB1dCgpXG4gIHNvdXJjZTogYW55O1xuICBASW5wdXQoKVxuICBtYXhsZW5ndGg6IGFueTtcbiAgQElucHV0KClcbiAgdHlwZTogYW55O1xuICBASW5wdXQoKVxuICBzZXQgZGlzYWJsZVBpY2tlcklucHV0KHY6IGJvb2xlYW4pIHtcbiAgICB0aGlzLl9kaXNhYmxlUGlja2VySW5wdXQgPSBjb2VyY2VCb29sZWFuUHJvcGVydHkodik7XG4gIH1cbiAgZ2V0IGRpc2FibGVQaWNrZXJJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fZGlzYWJsZVBpY2tlcklucHV0O1xuICB9XG4gIHByaXZhdGUgX2Rpc2FibGVQaWNrZXJJbnB1dDogYm9vbGVhbiA9IGZhbHNlO1xuXG4gIEBPdXRwdXQoKVxuICBjaGFuZ2VkOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgQE91dHB1dCgpXG4gIGZvY3VzOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgQE91dHB1dCgpXG4gIGJsdXI6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICBAT3V0cHV0KClcbiAgdHlwaW5nOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuICBAVmlld0NoaWxkKCdwcmV2aWV3JywgeyByZWFkOiBWaWV3Q29udGFpbmVyUmVmLCBzdGF0aWM6IGZhbHNlIH0pXG4gIHByZXZpZXc6IFZpZXdDb250YWluZXJSZWY7XG5cbiAgaXRlbXM6IEFycmF5PGFueT4gPSBbXTtcbiAgc2VsZWN0ZWQ6IGFueSA9IG51bGw7XG4gIGNvbmZpZzogYW55ID0ge307XG4gIG1vZGVsOiBhbnk7XG4gIGl0ZW1Ub0FkZDogYW55O1xuICBwb3B1cDogYW55O1xuICAvLyBwcml2YXRlIGRhdGEgbW9kZWxcbiAgX3ZhbHVlOiBhbnkgPSAnJztcbiAgX2l0ZW1zID0gbmV3IFJlcGxheVN1YmplY3QoMSk7XG4gIC8vIFBsYWNlaG9sZGVycyBmb3IgdGhlIGNhbGxiYWNrc1xuICBvbk1vZGVsQ2hhbmdlOiBGdW5jdGlvbiA9ICgpID0+IHt9O1xuICBvbk1vZGVsVG91Y2hlZDogRnVuY3Rpb24gPSAoKSA9PiB7fTtcblxuICBjb25zdHJ1Y3RvcihwdWJsaWMgZWxlbWVudDogRWxlbWVudFJlZiwgcHJpdmF0ZSBjb21wb25lbnRVdGlsczogQ29tcG9uZW50VXRpbHMsIHB1YmxpYyBsYWJlbHM6IE5vdm9MYWJlbFNlcnZpY2UpIHt9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgdGhpcy5zZXRJdGVtcygpO1xuICB9XG5cbiAgZ2V0IHZhbHVlKCkge1xuICAgIHJldHVybiB0aGlzLl92YWx1ZTtcbiAgfVxuXG4gIEBJbnB1dCgpXG4gIHNldCB2YWx1ZShzZWxlY3RlZCkge1xuICAgIHRoaXMuaXRlbVRvQWRkID0gJyc7XG4gICAgaWYgKHNlbGVjdGVkICE9PSB0aGlzLl92YWx1ZSkge1xuICAgICAgdGhpcy5fdmFsdWUgPSBzZWxlY3RlZDtcbiAgICAgIHRoaXMuY2hhbmdlZC5lbWl0KHsgdmFsdWU6IHNlbGVjdGVkLCByYXdWYWx1ZTogdGhpcy5pdGVtcyB9KTtcbiAgICAgIHRoaXMub25Nb2RlbENoYW5nZShzZWxlY3RlZCk7XG4gICAgfVxuICB9XG5cbiAgY2xlYXJWYWx1ZSgpIHtcbiAgICB0aGlzLml0ZW1zID0gW107XG4gICAgdGhpcy5faXRlbXMubmV4dCh0aGlzLml0ZW1zKTtcbiAgICB0aGlzLnZhbHVlID0gbnVsbDtcbiAgICB0aGlzLmNoYW5nZWQuZW1pdCh7IHZhbHVlOiB0aGlzLnZhbHVlLCByYXdWYWx1ZTogdGhpcy5pdGVtcyB9KTtcbiAgICB0aGlzLm9uTW9kZWxDaGFuZ2UodGhpcy52YWx1ZSk7XG4gIH1cblxuICBzZXRJdGVtcygpIHtcbiAgICB0aGlzLml0ZW1zID0gW107XG4gICAgaWYgKHRoaXMubW9kZWwgJiYgQXJyYXkuaXNBcnJheSh0aGlzLm1vZGVsKSkge1xuICAgICAgY29uc3Qgbm9MYWJlbHMgPSBbXTtcbiAgICAgIGZvciAoY29uc3QgdmFsdWUgb2YgdGhpcy5tb2RlbCkge1xuICAgICAgICBsZXQgbGFiZWw7XG4gICAgICAgIGlmICh0aGlzLnNvdXJjZSAmJiB0aGlzLnNvdXJjZS5mb3JtYXQgJiYgSGVscGVycy52YWxpZGF0ZUludGVycG9sYXRpb25Qcm9wcyh0aGlzLnNvdXJjZS5mb3JtYXQsIHZhbHVlKSkge1xuICAgICAgICAgIGxhYmVsID0gSGVscGVycy5pbnRlcnBvbGF0ZSh0aGlzLnNvdXJjZS5mb3JtYXQsIHZhbHVlKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5zb3VyY2UgJiYgbGFiZWwgJiYgbGFiZWwgIT09IHRoaXMuc291cmNlLmZvcm1hdCkge1xuICAgICAgICAgIHRoaXMuaXRlbXMucHVzaCh7XG4gICAgICAgICAgICB2YWx1ZSxcbiAgICAgICAgICAgIGxhYmVsLFxuICAgICAgICAgIH0pO1xuICAgICAgICB9IGVsc2UgaWYgKHRoaXMuc291cmNlLmdldExhYmVscyAmJiB0eXBlb2YgdGhpcy5zb3VyY2UuZ2V0TGFiZWxzID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgbm9MYWJlbHMucHVzaCh2YWx1ZSk7XG4gICAgICAgIH0gZWxzZSBpZiAodGhpcy5zb3VyY2Uub3B0aW9ucyAmJiBBcnJheS5pc0FycmF5KHRoaXMuc291cmNlLm9wdGlvbnMpKSB7XG4gICAgICAgICAgdGhpcy5pdGVtcy5wdXNoKHRoaXMuZ2V0TGFiZWxGcm9tT3B0aW9ucyh2YWx1ZSkpO1xuICAgICAgICB9IGVsc2UgaWYgKHRoaXMuc291cmNlLmNhdGVnb3J5TWFwICYmIHRoaXMuc291cmNlLmNhdGVnb3J5TWFwLnNpemUpIHtcbiAgICAgICAgICB0aGlzLml0ZW1zLnB1c2godmFsdWUpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRoaXMuaXRlbXMucHVzaCh7XG4gICAgICAgICAgICB2YWx1ZSxcbiAgICAgICAgICAgIGxhYmVsOiB2YWx1ZSxcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG5vTGFiZWxzLmxlbmd0aCA+IDAgJiYgdGhpcy5zb3VyY2UgJiYgdGhpcy5zb3VyY2UuZ2V0TGFiZWxzICYmIHR5cGVvZiB0aGlzLnNvdXJjZS5nZXRMYWJlbHMgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgdGhpcy5zb3VyY2UuZ2V0TGFiZWxzKG5vTGFiZWxzKS50aGVuKChyZXN1bHQpID0+IHtcbiAgICAgICAgICBmb3IgKGNvbnN0IHZhbHVlIG9mIHJlc3VsdCkge1xuICAgICAgICAgICAgaWYgKHZhbHVlLmhhc093blByb3BlcnR5KCdsYWJlbCcpKSB7XG4gICAgICAgICAgICAgIHRoaXMuaXRlbXMucHVzaCh7XG4gICAgICAgICAgICAgICAgdmFsdWUsXG4gICAgICAgICAgICAgICAgbGFiZWw6IHZhbHVlLmxhYmVsLFxuICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAodGhpcy5zb3VyY2Uub3B0aW9ucyAmJiBBcnJheS5pc0FycmF5KHRoaXMuc291cmNlLm9wdGlvbnMpKSB7XG4gICAgICAgICAgICAgIHRoaXMuaXRlbXMucHVzaCh0aGlzLmdldExhYmVsRnJvbU9wdGlvbnModmFsdWUpKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIHRoaXMuaXRlbXMucHVzaCh2YWx1ZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICAgIHRoaXMuX2l0ZW1zLm5leHQodGhpcy5pdGVtcyk7XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH1cbiAgICB0aGlzLmNoYW5nZWQuZW1pdCh7IHZhbHVlOiB0aGlzLm1vZGVsLCByYXdWYWx1ZTogdGhpcy5pdGVtcyB9KTtcbiAgICB0aGlzLl9pdGVtcy5uZXh0KHRoaXMuaXRlbXMpO1xuICB9XG5cbiAgZ2V0TGFiZWxGcm9tT3B0aW9ucyh2YWx1ZSkge1xuICAgIGxldCBpZCA9IHZhbHVlO1xuICAgIGxldCBvcHRMYWJlbCA9IHRoaXMuc291cmNlLm9wdGlvbnMuZmluZCgodmFsKSA9PiB2YWwudmFsdWUgPT09IHZhbHVlKTtcbiAgICBpZiAoIW9wdExhYmVsICYmIHZhbHVlLmhhc093blByb3BlcnR5KCdpZCcpKSB7XG4gICAgICBvcHRMYWJlbCA9IHRoaXMuc291cmNlLm9wdGlvbnMuZmluZCgodmFsKSA9PiB2YWwudmFsdWUgPT09IHZhbHVlLmlkKTtcbiAgICAgIGlkID0gdmFsdWUuaWQ7XG4gICAgfVxuICAgIHJldHVybiB7XG4gICAgICB2YWx1ZTogaWQsXG4gICAgICBsYWJlbDogb3B0TGFiZWwgPyBvcHRMYWJlbC5sYWJlbCA6IHZhbHVlLFxuICAgIH07XG4gIH1cblxuICBkZXNlbGVjdEFsbChldmVudD8pIHtcbiAgICB0aGlzLnNlbGVjdGVkID0gbnVsbDtcbiAgICB0aGlzLmhpZGVQcmV2aWV3KCk7XG4gIH1cblxuICBzZWxlY3QoZXZlbnQ/LCBpdGVtPykge1xuICAgIHRoaXMuYmx1ci5lbWl0KGV2ZW50KTtcbiAgICB0aGlzLmRlc2VsZWN0QWxsKCk7XG4gICAgdGhpcy5zZWxlY3RlZCA9IGl0ZW07XG4gICAgdGhpcy5zaG93UHJldmlldygpO1xuICB9XG5cbiAgZGVzZWxlY3QoZXZlbnQ/LCBpdGVtPykge1xuICAgIHRoaXMuYmx1ci5lbWl0KGV2ZW50KTtcbiAgICB0aGlzLmRlc2VsZWN0QWxsKCk7XG4gIH1cblxuICBvblR5cGluZyhldmVudD8pIHtcbiAgICB0aGlzLnR5cGluZy5lbWl0KGV2ZW50KTtcbiAgfVxuXG4gIG9uRm9jdXMoZXZlbnQ/KSB7XG4gICAgdGhpcy5kZXNlbGVjdEFsbCgpO1xuICAgIHRoaXMuZWxlbWVudC5uYXRpdmVFbGVtZW50LmNsYXNzTGlzdC5hZGQoJ3NlbGVjdGVkJyk7XG4gICAgdGhpcy5mb2N1cy5lbWl0KGV2ZW50KTtcbiAgfVxuXG4gIGFkZChldmVudCkge1xuICAgIGlmIChldmVudCAmJiAhKGV2ZW50IGluc3RhbmNlb2YgRXZlbnQpKSB7XG4gICAgICB0aGlzLml0ZW1zLnB1c2goZXZlbnQpO1xuICAgICAgdGhpcy52YWx1ZSA9IHRoaXMuc291cmNlICYmIHRoaXMuc291cmNlLnZhbHVlRm9ybWF0dGVyID8gdGhpcy5zb3VyY2UudmFsdWVGb3JtYXR0ZXIodGhpcy5pdGVtcykgOiB0aGlzLml0ZW1zLm1hcCgoaSkgPT4gaS52YWx1ZSk7XG4gICAgICAvLyBTZXQgZm9jdXMgb24gdGhlIHBpY2tlclxuICAgICAgY29uc3QgaW5wdXQgPSB0aGlzLmVsZW1lbnQubmF0aXZlRWxlbWVudC5xdWVyeVNlbGVjdG9yKCdub3ZvLXBpY2tlciA+IGlucHV0Jyk7XG4gICAgICBpZiAoaW5wdXQpIHtcbiAgICAgICAgaW5wdXQuZm9jdXMoKTtcbiAgICAgIH1cbiAgICB9XG4gICAgdGhpcy5faXRlbXMubmV4dCh0aGlzLml0ZW1zKTtcbiAgfVxuXG4gIHJlbW92ZShldmVudCwgaXRlbSkge1xuICAgIGlmIChldmVudCkge1xuICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIH1cbiAgICB0aGlzLml0ZW1zLnNwbGljZSh0aGlzLml0ZW1zLmluZGV4T2YoaXRlbSksIDEpO1xuICAgIHRoaXMuZGVzZWxlY3RBbGwoKTtcbiAgICB0aGlzLnZhbHVlID0gdGhpcy5zb3VyY2UgJiYgdGhpcy5zb3VyY2UudmFsdWVGb3JtYXR0ZXIgPyB0aGlzLnNvdXJjZS52YWx1ZUZvcm1hdHRlcih0aGlzLml0ZW1zKSA6IHRoaXMuaXRlbXMubWFwKChpKSA9PiBpLnZhbHVlKTtcbiAgICB0aGlzLmNoYW5nZWQuZW1pdCh7IHZhbHVlOiB0aGlzLnZhbHVlLmxlbmd0aCA/IHRoaXMudmFsdWUgOiAnJywgcmF3VmFsdWU6IHRoaXMuaXRlbXMgfSk7XG4gICAgdGhpcy5vbk1vZGVsQ2hhbmdlKHRoaXMudmFsdWUubGVuZ3RoID8gdGhpcy52YWx1ZSA6ICcnKTtcbiAgICB0aGlzLl9pdGVtcy5uZXh0KHRoaXMuaXRlbXMpO1xuICB9XG5cbiAgb25LZXlEb3duKGV2ZW50KSB7XG4gICAgaWYgKGV2ZW50LmtleUNvZGUgPT09IEtleUNvZGVzLkJBQ0tTUEFDRSkge1xuICAgICAgaWYgKGV2ZW50LnRhcmdldCAmJiBldmVudC50YXJnZXQudmFsdWUubGVuZ3RoID09PSAwICYmIHRoaXMuaXRlbXMubGVuZ3RoKSB7XG4gICAgICAgIGlmIChldmVudCkge1xuICAgICAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMuc2VsZWN0ZWQpIHtcbiAgICAgICAgICB0aGlzLnJlbW92ZShldmVudCwgdGhpcy5zZWxlY3RlZCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdGhpcy5zZWxlY3QoZXZlbnQsIHRoaXMuaXRlbXNbdGhpcy5pdGVtcy5sZW5ndGggLSAxXSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAvLyBTZXQgdG91Y2hlZCBvbiBibHVyXG4gIG9uVG91Y2hlZChlKSB7XG4gICAgdGhpcy5lbGVtZW50Lm5hdGl2ZUVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZSgnc2VsZWN0ZWQnKTtcbiAgICB0aGlzLm9uTW9kZWxUb3VjaGVkKCk7XG4gICAgdGhpcy5ibHVyLmVtaXQoZSk7XG4gIH1cblxuICB3cml0ZVZhbHVlKG1vZGVsOiBhbnkpOiB2b2lkIHtcbiAgICB0aGlzLm1vZGVsID0gbW9kZWw7XG4gICAgdGhpcy5zZXRJdGVtcygpO1xuICB9XG5cbiAgcmVnaXN0ZXJPbkNoYW5nZShmbjogRnVuY3Rpb24pOiB2b2lkIHtcbiAgICB0aGlzLm9uTW9kZWxDaGFuZ2UgPSBmbjtcbiAgfVxuXG4gIHJlZ2lzdGVyT25Ub3VjaGVkKGZuOiBGdW5jdGlvbik6IHZvaWQge1xuICAgIHRoaXMub25Nb2RlbFRvdWNoZWQgPSBmbjtcbiAgfVxuXG4gIHNldERpc2FibGVkU3RhdGUoZGlzYWJsZWQ6IGJvb2xlYW4pOiB2b2lkIHtcbiAgICB0aGlzLl9kaXNhYmxlUGlja2VySW5wdXQgPSBkaXNhYmxlZDtcbiAgfVxuXG4gIC8qKlxuICAgKiBAZGVzY3JpcHRpb24gVGhpcyBtZXRob2QgY3JlYXRlcyBhbiBpbnN0YW5jZSBvZiB0aGUgcHJldmlldyAoY2FsbGVkIHBvcHVwKSBhbmQgYWRkcyBhbGwgdGhlIGJpbmRpbmdzIHRvIHRoYXRcbiAgICogaW5zdGFuY2UuIFdpbGwgcmV1c2UgdGhlIHBvcHVwIG9yIGNyZWF0ZSBhIG5ldyBvbmUgaWYgaXQgZG9lcyBub3QgYWxyZWFkeSBleGlzdC4gV2lsbCBvbmx5IHdvcmsgaWYgdGhlcmUgaXNcbiAgICogYSBwcmV2aWV3VGVtcGxhdGUgZ2l2ZW4gaW4gdGhlIGNvbmZpZy5cbiAgICovXG4gIHNob3dQcmV2aWV3KCkge1xuICAgIGlmICh0aGlzLnNvdXJjZS5wcmV2aWV3VGVtcGxhdGUpIHtcbiAgICAgIGlmICghdGhpcy5wb3B1cCkge1xuICAgICAgICB0aGlzLnBvcHVwID0gdGhpcy5jb21wb25lbnRVdGlscy5hcHBlbmQodGhpcy5zb3VyY2UucHJldmlld1RlbXBsYXRlLCB0aGlzLnByZXZpZXcpO1xuICAgICAgfVxuICAgICAgdGhpcy5wb3B1cC5pbnN0YW5jZS5tYXRjaCA9IHRoaXMuc2VsZWN0ZWQ7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIEBkZXNjcmlwdGlvbiAtIFRoaXMgbWV0aG9kIGRlbGV0ZXMgdGhlIHByZXZpZXcgcG9wdXAgZnJvbSB0aGUgRE9NLlxuICAgKi9cbiAgaGlkZVByZXZpZXcoKSB7XG4gICAgaWYgKHRoaXMucG9wdXApIHtcbiAgICAgIHRoaXMucG9wdXAuZGVzdHJveSgpO1xuICAgICAgdGhpcy5wb3B1cCA9IG51bGw7XG4gICAgfVxuICB9XG59XG4iXX0=