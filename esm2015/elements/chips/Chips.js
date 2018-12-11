/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
// NG2
import { Component, EventEmitter, Input, Output, forwardRef, ElementRef, ViewChild, ViewContainerRef } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
// Vendor
import { ReplaySubject } from 'rxjs';
import { coerceBooleanProperty } from '@angular/cdk/coercion';
import { KeyCodes } from '../../utils/key-codes/KeyCodes';
import { Helpers } from '../../utils/Helpers';
import { NovoLabelService } from '../../services/novo-label-service';
import { ComponentUtils } from '../../utils/component-utils/ComponentUtils';
// Value accessor for the component (supports ngModel)
/** @type {?} */
const CHIPS_VALUE_ACCESSOR = {
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => NovoChipsElement),
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
        this.onModelChange = () => { };
        this.onModelTouched = () => { };
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
            let noLabels = [];
            for (let value of this.model) {
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
                this.source.getLabels(noLabels).then((result) => {
                    for (let value of result) {
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
                });
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
        let optLabel = this.source.options.find((val) => val.value === value);
        return {
            value,
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
            this.value = this.source && this.source.valueFormatter ? this.source.valueFormatter(this.items) : this.items.map((i) => i.value);
            // Set focus on the picker
            /** @type {?} */
            let input = this.element.nativeElement.querySelector('novo-picker > input');
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
        this.value = this.source && this.source.valueFormatter ? this.source.valueFormatter(this.items) : this.items.map((i) => i.value);
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
     * \@name showPreview
     *
     * \@description This method creates an instance of the preview (called popup) and adds all the bindings to that
     * instance. Will reuse the popup or create a new one if it does not already exist. Will only work if there is
     * a previewTemplate given in the config.
     * @return {?}
     */
    showPreview() {
        if (this.source.previewTemplate) {
            if (!this.popup) {
                this.popup = this.componentUtils.appendNextToLocation(this.source.previewTemplate, this.preview);
            }
            this.popup.instance.match = this.selected;
        }
    }
    /**
     * \@name hidePreview
     *
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
        <div class="chip-input-container">
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
    type: [{ type: Input }],
    disablePickerInput: [{ type: Input }],
    changed: [{ type: Output }],
    focus: [{ type: Output }],
    blur: [{ type: Output }],
    typing: [{ type: Output }],
    preview: [{ type: ViewChild, args: ['preview', { read: ViewContainerRef },] }],
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ2hpcHMuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9ub3ZvLWVsZW1lbnRzLyIsInNvdXJjZXMiOlsiZWxlbWVudHMvY2hpcHMvQ2hpcHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFDQSxPQUFPLEVBQUUsU0FBUyxFQUFFLFlBQVksRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLFVBQVUsRUFBRSxVQUFVLEVBQVUsU0FBUyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3BJLE9BQU8sRUFBRSxpQkFBaUIsRUFBd0IsTUFBTSxnQkFBZ0IsQ0FBQzs7QUFFekUsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUNyQyxPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQUc5RCxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZ0NBQWdDLENBQUM7QUFDMUQsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBQzlDLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLG1DQUFtQyxDQUFDO0FBQ3JFLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSw0Q0FBNEMsQ0FBQzs7O01BR3RFLG9CQUFvQixHQUFHO0lBQzNCLE9BQU8sRUFBRSxpQkFBaUI7SUFDMUIsV0FBVyxFQUFFLFVBQVUsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxnQkFBZ0IsQ0FBQztJQUMvQyxLQUFLLEVBQUUsSUFBSTtDQUNaO0FBWUQsTUFBTSxPQUFPLGVBQWU7SUFWNUI7UUFpQkUsYUFBUSxHQUFZLEtBQUssQ0FBQztRQUcxQixXQUFNLEdBQXNCLElBQUksWUFBWSxFQUFFLENBQUM7UUFFL0MsV0FBTSxHQUFzQixJQUFJLFlBQVksRUFBRSxDQUFDO1FBRS9DLGFBQVEsR0FBc0IsSUFBSSxZQUFZLEVBQUUsQ0FBQztJQStCbkQsQ0FBQzs7Ozs7SUE1Q0MsSUFDSSxJQUFJLENBQUMsSUFBWTtRQUNuQixJQUFJLENBQUMsS0FBSyxH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QStCIiwic291cmNlc0NvbnRlbnQiOlsiLy8gTkcyXG5pbXBvcnQgeyBDb21wb25lbnQsIEV2ZW50RW1pdHRlciwgSW5wdXQsIE91dHB1dCwgZm9yd2FyZFJlZiwgRWxlbWVudFJlZiwgT25Jbml0LCBWaWV3Q2hpbGQsIFZpZXdDb250YWluZXJSZWYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE5HX1ZBTFVFX0FDQ0VTU09SLCBDb250cm9sVmFsdWVBY2Nlc3NvciB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbi8vIFZlbmRvclxuaW1wb3J0IHsgUmVwbGF5U3ViamVjdCB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgY29lcmNlQm9vbGVhblByb3BlcnR5IH0gZnJvbSAnQGFuZ3VsYXIvY2RrL2NvZXJjaW9uJztcbi8vIEFQUFxuaW1wb3J0IHsgT3V0c2lkZUNsaWNrIH0gZnJvbSAnLi4vLi4vdXRpbHMvb3V0c2lkZS1jbGljay9PdXRzaWRlQ2xpY2snO1xuaW1wb3J0IHsgS2V5Q29kZXMgfSBmcm9tICcuLi8uLi91dGlscy9rZXktY29kZXMvS2V5Q29kZXMnO1xuaW1wb3J0IHsgSGVscGVycyB9IGZyb20gJy4uLy4uL3V0aWxzL0hlbHBlcnMnO1xuaW1wb3J0IHsgTm92b0xhYmVsU2VydmljZSB9IGZyb20gJy4uLy4uL3NlcnZpY2VzL25vdm8tbGFiZWwtc2VydmljZSc7XG5pbXBvcnQgeyBDb21wb25lbnRVdGlscyB9IGZyb20gJy4uLy4uL3V0aWxzL2NvbXBvbmVudC11dGlscy9Db21wb25lbnRVdGlscyc7XG5cbi8vIFZhbHVlIGFjY2Vzc29yIGZvciB0aGUgY29tcG9uZW50IChzdXBwb3J0cyBuZ01vZGVsKVxuY29uc3QgQ0hJUFNfVkFMVUVfQUNDRVNTT1IgPSB7XG4gIHByb3ZpZGU6IE5HX1ZBTFVFX0FDQ0VTU09SLFxuICB1c2VFeGlzdGluZzogZm9yd2FyZFJlZigoKSA9PiBOb3ZvQ2hpcHNFbGVtZW50KSxcbiAgbXVsdGk6IHRydWUsXG59O1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdjaGlwLG5vdm8tY2hpcCcsXG4gIHRlbXBsYXRlOiBgXG4gICAgICAgIDxzcGFuIChjbGljayk9XCJvblNlbGVjdCgkZXZlbnQpXCIgKG1vdXNlZW50ZXIpPVwib25TZWxlY3QoJGV2ZW50KVwiIChtb3VzZWxlYXZlKT1cIm9uRGVzZWxlY3QoJGV2ZW50KVwiIFtuZ0NsYXNzXT1cIl90eXBlXCI+XG4gICAgICAgICAgICA8aSAqbmdJZj1cIl90eXBlXCIgY2xhc3M9XCJiaGktY2lyY2xlXCI+PC9pPlxuICAgICAgICAgICAgPHNwYW4+PG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50Pjwvc3Bhbj5cbiAgICAgICAgPC9zcGFuPlxuICAgICAgICA8aSBjbGFzcz1cImJoaS1jbG9zZVwiICpuZ0lmPVwiIWRpc2FibGVkXCIgKGNsaWNrKT1cIm9uUmVtb3ZlKCRldmVudClcIj48L2k+XG4gICAgYCxcbn0pXG5leHBvcnQgY2xhc3MgTm92b0NoaXBFbGVtZW50IHtcbiAgQElucHV0KClcbiAgc2V0IHR5cGUodHlwZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fdHlwZSA9IHR5cGUgPyB0eXBlLnRvTG93ZXJDYXNlKCkgOiBudWxsO1xuICB9XG5cbiAgQElucHV0KClcbiAgZGlzYWJsZWQ6IGJvb2xlYW4gPSBmYWxzZTtcblxuICBAT3V0cHV0KClcbiAgc2VsZWN0OiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgQE91dHB1dCgpXG4gIHJlbW92ZTogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gIEBPdXRwdXQoKVxuICBkZXNlbGVjdDogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cbiAgZW50aXR5OiBzdHJpbmc7XG4gIF90eXBlOiBzdHJpbmc7XG5cbiAgb25SZW1vdmUoZSkge1xuICAgIGlmIChlKSB7XG4gICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIH1cbiAgICB0aGlzLnJlbW92ZS5lbWl0KGUpO1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIG9uU2VsZWN0KGUpIHtcbiAgICBpZiAoZSkge1xuICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICB9XG4gICAgdGhpcy5zZWxlY3QuZW1pdChlKTtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBvbkRlc2VsZWN0KGUpIHtcbiAgICBpZiAoZSkge1xuICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICB9XG4gICAgdGhpcy5kZXNlbGVjdC5lbWl0KGUpO1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxufVxuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdjaGlwcyxub3ZvLWNoaXBzJyxcbiAgcHJvdmlkZXJzOiBbQ0hJUFNfVkFMVUVfQUNDRVNTT1JdLFxuICB0ZW1wbGF0ZTogYFxuICAgICAgICA8bm92by1jaGlwXG4gICAgICAgICAgICAqbmdGb3I9XCJsZXQgaXRlbSBvZiBfaXRlbXMgfCBhc3luY1wiXG4gICAgICAgICAgICBbdHlwZV09XCJ0eXBlIHx8IGl0ZW0/LnZhbHVlPy5zZWFyY2hFbnRpdHlcIlxuICAgICAgICAgICAgW2NsYXNzLnNlbGVjdGVkXT1cIml0ZW0gPT0gc2VsZWN0ZWRcIlxuICAgICAgICAgICAgW2Rpc2FibGVkXT1cImRpc2FibGVQaWNrZXJJbnB1dFwiXG4gICAgICAgICAgICAocmVtb3ZlKT1cInJlbW92ZSgkZXZlbnQsIGl0ZW0pXCJcbiAgICAgICAgICAgIChzZWxlY3QpPVwic2VsZWN0KCRldmVudCwgaXRlbSlcIlxuICAgICAgICAgICAgKGRlc2VsZWN0KT1cImRlc2VsZWN0KCRldmVudCwgaXRlbSlcIj5cbiAgICAgICAgICAgIHt7IGl0ZW0ubGFiZWwgfX1cbiAgICAgICAgPC9ub3ZvLWNoaXA+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJjaGlwLWlucHV0LWNvbnRhaW5lclwiPlxuICAgICAgICAgICAgPG5vdm8tcGlja2VyXG4gICAgICAgICAgICAgICAgY2xlYXJWYWx1ZU9uU2VsZWN0PVwidHJ1ZVwiXG4gICAgICAgICAgICAgICAgW2Nsb3NlT25TZWxlY3RdPVwiY2xvc2VPblNlbGVjdFwiXG4gICAgICAgICAgICAgICAgW2NvbmZpZ109XCJzb3VyY2VcIlxuICAgICAgICAgICAgICAgIFtkaXNhYmxlUGlja2VySW5wdXRdPVwiZGlzYWJsZVBpY2tlcklucHV0XCJcbiAgICAgICAgICAgICAgICBbcGxhY2Vob2xkZXJdPVwicGxhY2Vob2xkZXJcIlxuICAgICAgICAgICAgICAgIFsobmdNb2RlbCldPVwiaXRlbVRvQWRkXCJcbiAgICAgICAgICAgICAgICAoc2VsZWN0KT1cImFkZCgkZXZlbnQpXCJcbiAgICAgICAgICAgICAgICAoa2V5ZG93bik9XCJvbktleURvd24oJGV2ZW50KVwiXG4gICAgICAgICAgICAgICAgKGZvY3VzKT1cIm9uRm9jdXMoJGV2ZW50KVwiXG4gICAgICAgICAgICAgICAgKHR5cGluZyk9XCJvblR5cGluZygkZXZlbnQpXCJcbiAgICAgICAgICAgICAgICAoYmx1cik9XCJvblRvdWNoZWQoJGV2ZW50KVwiXG4gICAgICAgICAgICAgICAgW3NlbGVjdGVkXT1cIml0ZW1zXCJcbiAgICAgICAgICAgICAgICBbb3ZlcnJpZGVFbGVtZW50XT1cImVsZW1lbnRcIj5cbiAgICAgICAgICAgIDwvbm92by1waWNrZXI+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzPVwicHJldmlldy1jb250YWluZXJcIj5cbiAgICAgICAgICAgIDxzcGFuICNwcmV2aWV3Pjwvc3Bhbj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxpIGNsYXNzPVwiYmhpLXNlYXJjaFwiIFtjbGFzcy5oYXMtdmFsdWVdPVwiaXRlbXMubGVuZ3RoXCIgKm5nSWY9XCIhZGlzYWJsZVBpY2tlcklucHV0XCI+PC9pPlxuICAgICAgICA8bGFiZWwgY2xhc3M9XCJjbGVhci1hbGxcIiAqbmdJZj1cIml0ZW1zLmxlbmd0aCAmJiAhZGlzYWJsZVBpY2tlcklucHV0XCIgKGNsaWNrKT1cImNsZWFyVmFsdWUoKVwiPnt7IGxhYmVscy5jbGVhckFsbCB9fSA8aSBjbGFzcz1cImJoaS10aW1lc1wiPjwvaT48L2xhYmVsPlxuICAgYCxcbiAgaG9zdDoge1xuICAgICdbY2xhc3Mud2l0aC12YWx1ZV0nOiAnaXRlbXMubGVuZ3RoID4gMCcsXG4gICAgJ1tjbGFzcy5kaXNhYmxlZF0nOiAnZGlzYWJsZVBpY2tlcklucHV0JyxcbiAgfSxcbn0pXG5leHBvcnQgY2xhc3MgTm92b0NoaXBzRWxlbWVudCBpbXBsZW1lbnRzIE9uSW5pdCwgQ29udHJvbFZhbHVlQWNjZXNzb3Ige1xuICBASW5wdXQoKVxuICBjbG9zZU9uU2VsZWN0OiBib29sZWFuID0gZmFsc2U7XG4gIEBJbnB1dCgpXG4gIHBsYWNlaG9sZGVyOiBzdHJpbmcgPSAnJztcbiAgQElucHV0KClcbiAgc291cmNlOiBhbnk7XG4gIEBJbnB1dCgpXG4gIHR5cGU6IGFueTtcbiAgQElucHV0KClcbiAgc2V0IGRpc2FibGVQaWNrZXJJbnB1dCh2OiBib29sZWFuKSB7XG4gICAgdGhpcy5fZGlzYWJsZVBpY2tlcklucHV0ID0gY29lcmNlQm9vbGVhblByb3BlcnR5KHYpO1xuICB9XG4gIGdldCBkaXNhYmxlUGlja2VySW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2Rpc2FibGVQaWNrZXJJbnB1dDtcbiAgfVxuICBwcml2YXRlIF9kaXNhYmxlUGlja2VySW5wdXQ6IGJvb2xlYW4gPSBmYWxzZTtcblxuICBAT3V0cHV0KClcbiAgY2hhbmdlZDogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gIEBPdXRwdXQoKVxuICBmb2N1czogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gIEBPdXRwdXQoKVxuICBibHVyOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgQE91dHB1dCgpXG4gIHR5cGluZzogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cbiAgQFZpZXdDaGlsZCgncHJldmlldycsIHsgcmVhZDogVmlld0NvbnRhaW5lclJlZiB9KVxuICBwcmV2aWV3OiBWaWV3Q29udGFpbmVyUmVmO1xuXG4gIGl0ZW1zOiBBcnJheTxhbnk+ID0gW107XG4gIHNlbGVjdGVkOiBhbnkgPSBudWxsO1xuICBjb25maWc6IGFueSA9IHt9O1xuICBtb2RlbDogYW55O1xuICBpdGVtVG9BZGQ6IGFueTtcbiAgcG9wdXA6IGFueTtcbiAgLy8gcHJpdmF0ZSBkYXRhIG1vZGVsXG4gIF92YWx1ZTogYW55ID0gJyc7XG4gIF9pdGVtcyA9IG5ldyBSZXBsYXlTdWJqZWN0KDEpO1xuICAvLyBQbGFjZWhvbGRlcnMgZm9yIHRoZSBjYWxsYmFja3NcbiAgb25Nb2RlbENoYW5nZTogRnVuY3Rpb24gPSAoKSA9PiB7fTtcbiAgb25Nb2RlbFRvdWNoZWQ6IEZ1bmN0aW9uID0gKCkgPT4ge307XG5cbiAgY29uc3RydWN0b3IocHVibGljIGVsZW1lbnQ6IEVsZW1lbnRSZWYsIHByaXZhdGUgY29tcG9uZW50VXRpbHM6IENvbXBvbmVudFV0aWxzLCBwdWJsaWMgbGFiZWxzOiBOb3ZvTGFiZWxTZXJ2aWNlKSB7fVxuXG4gIG5nT25Jbml0KCkge1xuICAgIHRoaXMuc2V0SXRlbXMoKTtcbiAgfVxuXG4gIGdldCB2YWx1ZSgpIHtcbiAgICByZXR1cm4gdGhpcy5fdmFsdWU7XG4gIH1cblxuICBASW5wdXQoKVxuICBzZXQgdmFsdWUoc2VsZWN0ZWQpIHtcbiAgICB0aGlzLml0ZW1Ub0FkZCA9ICcnO1xuICAgIGlmIChzZWxlY3RlZCAhPT0gdGhpcy5fdmFsdWUpIHtcbiAgICAgIHRoaXMuX3ZhbHVlID0gc2VsZWN0ZWQ7XG4gICAgICB0aGlzLmNoYW5nZWQuZW1pdCh7IHZhbHVlOiBzZWxlY3RlZCwgcmF3VmFsdWU6IHRoaXMuaXRlbXMgfSk7XG4gICAgICB0aGlzLm9uTW9kZWxDaGFuZ2Uoc2VsZWN0ZWQpO1xuICAgIH1cbiAgfVxuXG4gIGNsZWFyVmFsdWUoKSB7XG4gICAgdGhpcy5pdGVtcyA9IFtdO1xuICAgIHRoaXMuX2l0ZW1zLm5leHQodGhpcy5pdGVtcyk7XG4gICAgdGhpcy52YWx1ZSA9IG51bGw7XG4gICAgdGhpcy5jaGFuZ2VkLmVtaXQoeyB2YWx1ZTogdGhpcy52YWx1ZSwgcmF3VmFsdWU6IHRoaXMuaXRlbXMgfSk7XG4gICAgdGhpcy5vbk1vZGVsQ2hhbmdlKHRoaXMudmFsdWUpO1xuICB9XG5cbiAgc2V0SXRlbXMoKSB7XG4gICAgdGhpcy5pdGVtcyA9IFtdO1xuICAgIGlmICh0aGlzLm1vZGVsICYmIEFycmF5LmlzQXJyYXkodGhpcy5tb2RlbCkpIHtcbiAgICAgIGxldCBub0xhYmVscyA9IFtdO1xuICAgICAgZm9yIChsZXQgdmFsdWUgb2YgdGhpcy5tb2RlbCkge1xuICAgICAgICBsZXQgbGFiZWw7XG4gICAgICAgIGlmICh0aGlzLnNvdXJjZSAmJiB0aGlzLnNvdXJjZS5mb3JtYXQgJiYgSGVscGVycy52YWxpZGF0ZUludGVycG9sYXRpb25Qcm9wcyh0aGlzLnNvdXJjZS5mb3JtYXQsIHZhbHVlKSkge1xuICAgICAgICAgIGxhYmVsID0gSGVscGVycy5pbnRlcnBvbGF0ZSh0aGlzLnNvdXJjZS5mb3JtYXQsIHZhbHVlKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5zb3VyY2UgJiYgbGFiZWwgJiYgbGFiZWwgIT09IHRoaXMuc291cmNlLmZvcm1hdCkge1xuICAgICAgICAgIHRoaXMuaXRlbXMucHVzaCh7XG4gICAgICAgICAgICB2YWx1ZSxcbiAgICAgICAgICAgIGxhYmVsLFxuICAgICAgICAgIH0pO1xuICAgICAgICB9IGVsc2UgaWYgKHRoaXMuc291cmNlLmdldExhYmVscyAmJiB0eXBlb2YgdGhpcy5zb3VyY2UuZ2V0TGFiZWxzID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgbm9MYWJlbHMucHVzaCh2YWx1ZSk7XG4gICAgICAgIH0gZWxzZSBpZiAodGhpcy5zb3VyY2Uub3B0aW9ucyAmJiBBcnJheS5pc0FycmF5KHRoaXMuc291cmNlLm9wdGlvbnMpKSB7XG4gICAgICAgICAgdGhpcy5pdGVtcy5wdXNoKHRoaXMuZ2V0TGFiZWxGcm9tT3B0aW9ucyh2YWx1ZSkpO1xuICAgICAgICB9IGVsc2UgaWYgKHRoaXMuc291cmNlLmNhdGVnb3J5TWFwICYmIHRoaXMuc291cmNlLmNhdGVnb3J5TWFwLnNpemUpIHtcbiAgICAgICAgICB0aGlzLml0ZW1zLnB1c2godmFsdWUpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRoaXMuaXRlbXMucHVzaCh7XG4gICAgICAgICAgICB2YWx1ZSxcbiAgICAgICAgICAgIGxhYmVsOiB2YWx1ZSxcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG5vTGFiZWxzLmxlbmd0aCA+IDAgJiYgdGhpcy5zb3VyY2UgJiYgdGhpcy5zb3VyY2UuZ2V0TGFiZWxzICYmIHR5cGVvZiB0aGlzLnNvdXJjZS5nZXRMYWJlbHMgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgdGhpcy5zb3VyY2UuZ2V0TGFiZWxzKG5vTGFiZWxzKS50aGVuKChyZXN1bHQpID0+IHtcbiAgICAgICAgICBmb3IgKGxldCB2YWx1ZSBvZiByZXN1bHQpIHtcbiAgICAgICAgICAgIGlmICh2YWx1ZS5oYXNPd25Qcm9wZXJ0eSgnbGFiZWwnKSkge1xuICAgICAgICAgICAgICB0aGlzLml0ZW1zLnB1c2goe1xuICAgICAgICAgICAgICAgIHZhbHVlLFxuICAgICAgICAgICAgICAgIGxhYmVsOiB2YWx1ZS5sYWJlbCxcbiAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKHRoaXMuc291cmNlLm9wdGlvbnMgJiYgQXJyYXkuaXNBcnJheSh0aGlzLnNvdXJjZS5vcHRpb25zKSkge1xuICAgICAgICAgICAgICB0aGlzLml0ZW1zLnB1c2godGhpcy5nZXRMYWJlbEZyb21PcHRpb25zKHZhbHVlKSk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICB0aGlzLml0ZW1zLnB1c2godmFsdWUpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgICB0aGlzLl9pdGVtcy5uZXh0KHRoaXMuaXRlbXMpO1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9XG4gICAgdGhpcy5jaGFuZ2VkLmVtaXQoeyB2YWx1ZTogdGhpcy5tb2RlbCwgcmF3VmFsdWU6IHRoaXMuaXRlbXMgfSk7XG4gICAgdGhpcy5faXRlbXMubmV4dCh0aGlzLml0ZW1zKTtcbiAgfVxuXG4gIGdldExhYmVsRnJvbU9wdGlvbnModmFsdWUpIHtcbiAgICBsZXQgb3B0TGFiZWwgPSB0aGlzLnNvdXJjZS5vcHRpb25zLmZpbmQoKHZhbCkgPT4gdmFsLnZhbHVlID09PSB2YWx1ZSk7XG4gICAgcmV0dXJuIHtcbiAgICAgIHZhbHVlLFxuICAgICAgbGFiZWw6IG9wdExhYmVsID8gb3B0TGFiZWwubGFiZWwgOiB2YWx1ZSxcbiAgICB9O1xuICB9XG5cbiAgZGVzZWxlY3RBbGwoZXZlbnQ/KSB7XG4gICAgdGhpcy5zZWxlY3RlZCA9IG51bGw7XG4gICAgdGhpcy5oaWRlUHJldmlldygpO1xuICB9XG5cbiAgc2VsZWN0KGV2ZW50PywgaXRlbT8pIHtcbiAgICB0aGlzLmJsdXIuZW1pdChldmVudCk7XG4gICAgdGhpcy5kZXNlbGVjdEFsbCgpO1xuICAgIHRoaXMuc2VsZWN0ZWQgPSBpdGVtO1xuICAgIHRoaXMuc2hvd1ByZXZpZXcoKTtcbiAgfVxuXG4gIGRlc2VsZWN0KGV2ZW50PywgaXRlbT8pIHtcbiAgICB0aGlzLmJsdXIuZW1pdChldmVudCk7XG4gICAgdGhpcy5kZXNlbGVjdEFsbCgpO1xuICB9XG5cbiAgb25UeXBpbmcoZXZlbnQ/KSB7XG4gICAgdGhpcy50eXBpbmcuZW1pdChldmVudCk7XG4gIH1cblxuICBvbkZvY3VzKGV2ZW50Pykge1xuICAgIHRoaXMuZGVzZWxlY3RBbGwoKTtcbiAgICB0aGlzLmVsZW1lbnQubmF0aXZlRWxlbWVudC5jbGFzc0xpc3QuYWRkKCdzZWxlY3RlZCcpO1xuICAgIHRoaXMuZm9jdXMuZW1pdChldmVudCk7XG4gIH1cblxuICBhZGQoZXZlbnQpIHtcbiAgICBpZiAoZXZlbnQgJiYgIShldmVudCBpbnN0YW5jZW9mIEV2ZW50KSkge1xuICAgICAgdGhpcy5pdGVtcy5wdXNoKGV2ZW50KTtcbiAgICAgIHRoaXMudmFsdWUgPSB0aGlzLnNvdXJjZSAmJiB0aGlzLnNvdXJjZS52YWx1ZUZvcm1hdHRlciA/IHRoaXMuc291cmNlLnZhbHVlRm9ybWF0dGVyKHRoaXMuaXRlbXMpIDogdGhpcy5pdGVtcy5tYXAoKGkpID0+IGkudmFsdWUpO1xuICAgICAgLy8gU2V0IGZvY3VzIG9uIHRoZSBwaWNrZXJcbiAgICAgIGxldCBpbnB1dCA9IHRoaXMuZWxlbWVudC5uYXRpdmVFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJ25vdm8tcGlja2VyID4gaW5wdXQnKTtcbiAgICAgIGlmIChpbnB1dCkge1xuICAgICAgICBpbnB1dC5mb2N1cygpO1xuICAgICAgfVxuICAgIH1cbiAgICB0aGlzLl9pdGVtcy5uZXh0KHRoaXMuaXRlbXMpO1xuICB9XG5cbiAgcmVtb3ZlKGV2ZW50LCBpdGVtKSB7XG4gICAgaWYgKGV2ZW50KSB7XG4gICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgfVxuICAgIHRoaXMuaXRlbXMuc3BsaWNlKHRoaXMuaXRlbXMuaW5kZXhPZihpdGVtKSwgMSk7XG4gICAgdGhpcy5kZXNlbGVjdEFsbCgpO1xuICAgIHRoaXMudmFsdWUgPSB0aGlzLnNvdXJjZSAmJiB0aGlzLnNvdXJjZS52YWx1ZUZvcm1hdHRlciA/IHRoaXMuc291cmNlLnZhbHVlRm9ybWF0dGVyKHRoaXMuaXRlbXMpIDogdGhpcy5pdGVtcy5tYXAoKGkpID0+IGkudmFsdWUpO1xuICAgIHRoaXMuY2hhbmdlZC5lbWl0KHsgdmFsdWU6IHRoaXMudmFsdWUubGVuZ3RoID8gdGhpcy52YWx1ZSA6ICcnLCByYXdWYWx1ZTogdGhpcy5pdGVtcyB9KTtcbiAgICB0aGlzLm9uTW9kZWxDaGFuZ2UodGhpcy52YWx1ZS5sZW5ndGggPyB0aGlzLnZhbHVlIDogJycpO1xuICAgIHRoaXMuX2l0ZW1zLm5leHQodGhpcy5pdGVtcyk7XG4gIH1cblxuICBvbktleURvd24oZXZlbnQpIHtcbiAgICBpZiAoZXZlbnQua2V5Q29kZSA9PT0gS2V5Q29kZXMuQkFDS1NQQUNFKSB7XG4gICAgICBpZiAoZXZlbnQudGFyZ2V0ICYmIGV2ZW50LnRhcmdldC52YWx1ZS5sZW5ndGggPT09IDAgJiYgdGhpcy5pdGVtcy5sZW5ndGgpIHtcbiAgICAgICAgaWYgKGV2ZW50KSB7XG4gICAgICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5zZWxlY3RlZCkge1xuICAgICAgICAgIHRoaXMucmVtb3ZlKGV2ZW50LCB0aGlzLnNlbGVjdGVkKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0aGlzLnNlbGVjdChldmVudCwgdGhpcy5pdGVtc1t0aGlzLml0ZW1zLmxlbmd0aCAtIDFdKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC8vIFNldCB0b3VjaGVkIG9uIGJsdXJcbiAgb25Ub3VjaGVkKGUpIHtcbiAgICB0aGlzLmVsZW1lbnQubmF0aXZlRWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKCdzZWxlY3RlZCcpO1xuICAgIHRoaXMub25Nb2RlbFRvdWNoZWQoKTtcbiAgICB0aGlzLmJsdXIuZW1pdChlKTtcbiAgfVxuXG4gIHdyaXRlVmFsdWUobW9kZWw6IGFueSk6IHZvaWQge1xuICAgIHRoaXMubW9kZWwgPSBtb2RlbDtcbiAgICB0aGlzLnNldEl0ZW1zKCk7XG4gIH1cblxuICByZWdpc3Rlck9uQ2hhbmdlKGZuOiBGdW5jdGlvbik6IHZvaWQge1xuICAgIHRoaXMub25Nb2RlbENoYW5nZSA9IGZuO1xuICB9XG5cbiAgcmVnaXN0ZXJPblRvdWNoZWQoZm46IEZ1bmN0aW9uKTogdm9pZCB7XG4gICAgdGhpcy5vbk1vZGVsVG91Y2hlZCA9IGZuO1xuICB9XG5cbiAgc2V0RGlzYWJsZWRTdGF0ZShkaXNhYmxlZDogYm9vbGVhbik6IHZvaWQge1xuICAgIHRoaXMuX2Rpc2FibGVQaWNrZXJJbnB1dCA9IGRpc2FibGVkO1xuICB9XG5cbiAgLyoqXG4gICAqIEBuYW1lIHNob3dQcmV2aWV3XG4gICAqXG4gICAqIEBkZXNjcmlwdGlvbiBUaGlzIG1ldGhvZCBjcmVhdGVzIGFuIGluc3RhbmNlIG9mIHRoZSBwcmV2aWV3IChjYWxsZWQgcG9wdXApIGFuZCBhZGRzIGFsbCB0aGUgYmluZGluZ3MgdG8gdGhhdFxuICAgKiBpbnN0YW5jZS4gV2lsbCByZXVzZSB0aGUgcG9wdXAgb3IgY3JlYXRlIGEgbmV3IG9uZSBpZiBpdCBkb2VzIG5vdCBhbHJlYWR5IGV4aXN0LiBXaWxsIG9ubHkgd29yayBpZiB0aGVyZSBpc1xuICAgKiBhIHByZXZpZXdUZW1wbGF0ZSBnaXZlbiBpbiB0aGUgY29uZmlnLlxuICAgKi9cbiAgc2hvd1ByZXZpZXcoKSB7XG4gICAgaWYgKHRoaXMuc291cmNlLnByZXZpZXdUZW1wbGF0ZSkge1xuICAgICAgaWYgKCF0aGlzLnBvcHVwKSB7XG4gICAgICAgIHRoaXMucG9wdXAgPSB0aGlzLmNvbXBvbmVudFV0aWxzLmFwcGVuZE5leHRUb0xvY2F0aW9uKHRoaXMuc291cmNlLnByZXZpZXdUZW1wbGF0ZSwgdGhpcy5wcmV2aWV3KTtcbiAgICAgIH1cbiAgICAgIHRoaXMucG9wdXAuaW5zdGFuY2UubWF0Y2ggPSB0aGlzLnNlbGVjdGVkO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBAbmFtZSBoaWRlUHJldmlld1xuICAgKlxuICAgKiBAZGVzY3JpcHRpb24gLSBUaGlzIG1ldGhvZCBkZWxldGVzIHRoZSBwcmV2aWV3IHBvcHVwIGZyb20gdGhlIERPTS5cbiAgICovXG4gIGhpZGVQcmV2aWV3KCkge1xuICAgIGlmICh0aGlzLnBvcHVwKSB7XG4gICAgICB0aGlzLnBvcHVwLmRlc3Ryb3koKTtcbiAgICAgIHRoaXMucG9wdXAgPSBudWxsO1xuICAgIH1cbiAgfVxufVxuIl19