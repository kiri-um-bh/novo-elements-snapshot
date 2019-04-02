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
                        if (value.hasOwnProperty('label') && value.hasOwnProperty('value')) {
                            this.items.push({
                                value: value.value,
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
    <div class="novo-chip-container">
      <novo-chip
        *ngFor="let item of (_items | async)"
        [type]="type || item?.value?.searchEntity"
        [class.selected]="item == selected"
        [disabled]="disablePickerInput"
        (remove)="remove($event, item)"
        (select)="select($event, item)"
        (deselect)="deselect($event, item)"
      >
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
        [overrideElement]="element"
      >
      </novo-picker>
    </div>
    <div class="preview-container">
      <span #preview></span>
    </div>
    <i class="bhi-search" [class.has-value]="items.length" *ngIf="!disablePickerInput"></i>
    <label class="clear-all" *ngIf="items.length && !disablePickerInput" (click)="clearValue()"
      >{{ labels.clearAll }} <i class="bhi-times"></i
    ></label>
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ2hpcHMuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9ub3ZvLWVsZW1lbnRzLyIsInNvdXJjZXMiOlsiZWxlbWVudHMvY2hpcHMvQ2hpcHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFDQSxPQUFPLEVBQUUsU0FBUyxFQUFFLFlBQVksRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLFVBQVUsRUFBRSxVQUFVLEVBQVUsU0FBUyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3BJLE9BQU8sRUFBRSxpQkFBaUIsRUFBd0IsTUFBTSxnQkFBZ0IsQ0FBQzs7QUFFekUsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUNyQyxPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQUc5RCxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZ0NBQWdDLENBQUM7QUFDMUQsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBQzlDLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLG1DQUFtQyxDQUFDO0FBQ3JFLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSw0Q0FBNEMsQ0FBQzs7O01BR3RFLG9CQUFvQixHQUFHO0lBQzNCLE9BQU8sRUFBRSxpQkFBaUI7SUFDMUIsV0FBVyxFQUFFLFVBQVUsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxnQkFBZ0IsQ0FBQztJQUMvQyxLQUFLLEVBQUUsSUFBSTtDQUNaO0FBWUQsTUFBTSxPQUFPLGVBQWU7SUFWNUI7UUFpQkUsYUFBUSxHQUFZLEtBQUssQ0FBQztRQUcxQixXQUFNLEdBQXNCLElBQUksWUFBWSxFQUFFLENBQUM7UUFFL0MsV0FBTSxHQUFzQixJQUFJLFlBQVksRUFBRSxDQUFDO1FBRS9DLGFBQVEsR0FBc0IsSUFBSSxZQUFZLEVBQUUsQ0FBQztJQStCbkQsQ0FBQzs7Ozs7SUE1Q0MsSUFDSSxJQUFJLENBQUMsSUFBWTtRQUNuQixJQUFJLENBQUMsS0FBSyxH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QWlCOztJQUNqQixrQ0FBOEI7O0lBRTlCLHlDQUFtQzs7SUFDbkMsMENBQW9DOztJQUV4QixtQ0FBMEI7Ozs7O0lBQUUsMENBQXNDOztJQUFFLGtDQUErQiIsInNvdXJjZXNDb250ZW50IjpbIi8vIE5HMlxuaW1wb3J0IHsgQ29tcG9uZW50LCBFdmVudEVtaXR0ZXIsIElucHV0LCBPdXRwdXQsIGZvcndhcmRSZWYsIEVsZW1lbnRSZWYsIE9uSW5pdCwgVmlld0NoaWxkLCBWaWV3Q29udGFpbmVyUmVmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBOR19WQUxVRV9BQ0NFU1NPUiwgQ29udHJvbFZhbHVlQWNjZXNzb3IgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG4vLyBWZW5kb3JcbmltcG9ydCB7IFJlcGxheVN1YmplY3QgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IGNvZXJjZUJvb2xlYW5Qcm9wZXJ0eSB9IGZyb20gJ0Bhbmd1bGFyL2Nkay9jb2VyY2lvbic7XG4vLyBBUFBcbmltcG9ydCB7IE91dHNpZGVDbGljayB9IGZyb20gJy4uLy4uL3V0aWxzL291dHNpZGUtY2xpY2svT3V0c2lkZUNsaWNrJztcbmltcG9ydCB7IEtleUNvZGVzIH0gZnJvbSAnLi4vLi4vdXRpbHMva2V5LWNvZGVzL0tleUNvZGVzJztcbmltcG9ydCB7IEhlbHBlcnMgfSBmcm9tICcuLi8uLi91dGlscy9IZWxwZXJzJztcbmltcG9ydCB7IE5vdm9MYWJlbFNlcnZpY2UgfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9ub3ZvLWxhYmVsLXNlcnZpY2UnO1xuaW1wb3J0IHsgQ29tcG9uZW50VXRpbHMgfSBmcm9tICcuLi8uLi91dGlscy9jb21wb25lbnQtdXRpbHMvQ29tcG9uZW50VXRpbHMnO1xuXG4vLyBWYWx1ZSBhY2Nlc3NvciBmb3IgdGhlIGNvbXBvbmVudCAoc3VwcG9ydHMgbmdNb2RlbClcbmNvbnN0IENISVBTX1ZBTFVFX0FDQ0VTU09SID0ge1xuICBwcm92aWRlOiBOR19WQUxVRV9BQ0NFU1NPUixcbiAgdXNlRXhpc3Rpbmc6IGZvcndhcmRSZWYoKCkgPT4gTm92b0NoaXBzRWxlbWVudCksXG4gIG11bHRpOiB0cnVlLFxufTtcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnY2hpcCxub3ZvLWNoaXAnLFxuICB0ZW1wbGF0ZTogYFxuICAgIDxzcGFuIChjbGljayk9XCJvblNlbGVjdCgkZXZlbnQpXCIgKG1vdXNlZW50ZXIpPVwib25TZWxlY3QoJGV2ZW50KVwiIChtb3VzZWxlYXZlKT1cIm9uRGVzZWxlY3QoJGV2ZW50KVwiIFtuZ0NsYXNzXT1cIl90eXBlXCI+XG4gICAgICA8aSAqbmdJZj1cIl90eXBlXCIgY2xhc3M9XCJiaGktY2lyY2xlXCI+PC9pPlxuICAgICAgPHNwYW4+PG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50Pjwvc3Bhbj5cbiAgICA8L3NwYW4+XG4gICAgPGkgY2xhc3M9XCJiaGktY2xvc2VcIiAqbmdJZj1cIiFkaXNhYmxlZFwiIChjbGljayk9XCJvblJlbW92ZSgkZXZlbnQpXCI+PC9pPlxuICBgLFxufSlcbmV4cG9ydCBjbGFzcyBOb3ZvQ2hpcEVsZW1lbnQge1xuICBASW5wdXQoKVxuICBzZXQgdHlwZSh0eXBlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl90eXBlID0gdHlwZSA/IHR5cGUudG9Mb3dlckNhc2UoKSA6IG51bGw7XG4gIH1cblxuICBASW5wdXQoKVxuICBkaXNhYmxlZDogYm9vbGVhbiA9IGZhbHNlO1xuXG4gIEBPdXRwdXQoKVxuICBzZWxlY3Q6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICBAT3V0cHV0KClcbiAgcmVtb3ZlOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgQE91dHB1dCgpXG4gIGRlc2VsZWN0OiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuICBlbnRpdHk6IHN0cmluZztcbiAgX3R5cGU6IHN0cmluZztcblxuICBvblJlbW92ZShlKSB7XG4gICAgaWYgKGUpIHtcbiAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgfVxuICAgIHRoaXMucmVtb3ZlLmVtaXQoZSk7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgb25TZWxlY3QoZSkge1xuICAgIGlmIChlKSB7XG4gICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIH1cbiAgICB0aGlzLnNlbGVjdC5lbWl0KGUpO1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIG9uRGVzZWxlY3QoZSkge1xuICAgIGlmIChlKSB7XG4gICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIH1cbiAgICB0aGlzLmRlc2VsZWN0LmVtaXQoZSk7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG59XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2NoaXBzLG5vdm8tY2hpcHMnLFxuICBwcm92aWRlcnM6IFtDSElQU19WQUxVRV9BQ0NFU1NPUl0sXG4gIHRlbXBsYXRlOiBgXG4gICAgPGRpdiBjbGFzcz1cIm5vdm8tY2hpcC1jb250YWluZXJcIj5cbiAgICAgIDxub3ZvLWNoaXBcbiAgICAgICAgKm5nRm9yPVwibGV0IGl0ZW0gb2YgKF9pdGVtcyB8IGFzeW5jKVwiXG4gICAgICAgIFt0eXBlXT1cInR5cGUgfHwgaXRlbT8udmFsdWU/LnNlYXJjaEVudGl0eVwiXG4gICAgICAgIFtjbGFzcy5zZWxlY3RlZF09XCJpdGVtID09IHNlbGVjdGVkXCJcbiAgICAgICAgW2Rpc2FibGVkXT1cImRpc2FibGVQaWNrZXJJbnB1dFwiXG4gICAgICAgIChyZW1vdmUpPVwicmVtb3ZlKCRldmVudCwgaXRlbSlcIlxuICAgICAgICAoc2VsZWN0KT1cInNlbGVjdCgkZXZlbnQsIGl0ZW0pXCJcbiAgICAgICAgKGRlc2VsZWN0KT1cImRlc2VsZWN0KCRldmVudCwgaXRlbSlcIlxuICAgICAgPlxuICAgICAgICB7eyBpdGVtLmxhYmVsIH19XG4gICAgICA8L25vdm8tY2hpcD5cbiAgICA8L2Rpdj5cbiAgICA8ZGl2IGNsYXNzPVwiY2hpcC1pbnB1dC1jb250YWluZXJcIiAqbmdJZj1cIiFtYXhsZW5ndGggfHwgKG1heGxlbmd0aCAmJiBpdGVtcy5sZW5ndGggPCBtYXhsZW5ndGgpXCI+XG4gICAgICA8bm92by1waWNrZXJcbiAgICAgICAgY2xlYXJWYWx1ZU9uU2VsZWN0PVwidHJ1ZVwiXG4gICAgICAgIFtjbG9zZU9uU2VsZWN0XT1cImNsb3NlT25TZWxlY3RcIlxuICAgICAgICBbY29uZmlnXT1cInNvdXJjZVwiXG4gICAgICAgIFtkaXNhYmxlUGlja2VySW5wdXRdPVwiZGlzYWJsZVBpY2tlcklucHV0XCJcbiAgICAgICAgW3BsYWNlaG9sZGVyXT1cInBsYWNlaG9sZGVyXCJcbiAgICAgICAgWyhuZ01vZGVsKV09XCJpdGVtVG9BZGRcIlxuICAgICAgICAoc2VsZWN0KT1cImFkZCgkZXZlbnQpXCJcbiAgICAgICAgKGtleWRvd24pPVwib25LZXlEb3duKCRldmVudClcIlxuICAgICAgICAoZm9jdXMpPVwib25Gb2N1cygkZXZlbnQpXCJcbiAgICAgICAgKHR5cGluZyk9XCJvblR5cGluZygkZXZlbnQpXCJcbiAgICAgICAgKGJsdXIpPVwib25Ub3VjaGVkKCRldmVudClcIlxuICAgICAgICBbc2VsZWN0ZWRdPVwiaXRlbXNcIlxuICAgICAgICBbb3ZlcnJpZGVFbGVtZW50XT1cImVsZW1lbnRcIlxuICAgICAgPlxuICAgICAgPC9ub3ZvLXBpY2tlcj5cbiAgICA8L2Rpdj5cbiAgICA8ZGl2IGNsYXNzPVwicHJldmlldy1jb250YWluZXJcIj5cbiAgICAgIDxzcGFuICNwcmV2aWV3Pjwvc3Bhbj5cbiAgICA8L2Rpdj5cbiAgICA8aSBjbGFzcz1cImJoaS1zZWFyY2hcIiBbY2xhc3MuaGFzLXZhbHVlXT1cIml0ZW1zLmxlbmd0aFwiICpuZ0lmPVwiIWRpc2FibGVQaWNrZXJJbnB1dFwiPjwvaT5cbiAgICA8bGFiZWwgY2xhc3M9XCJjbGVhci1hbGxcIiAqbmdJZj1cIml0ZW1zLmxlbmd0aCAmJiAhZGlzYWJsZVBpY2tlcklucHV0XCIgKGNsaWNrKT1cImNsZWFyVmFsdWUoKVwiXG4gICAgICA+e3sgbGFiZWxzLmNsZWFyQWxsIH19IDxpIGNsYXNzPVwiYmhpLXRpbWVzXCI+PC9pXG4gICAgPjwvbGFiZWw+XG4gIGAsXG4gIGhvc3Q6IHtcbiAgICAnW2NsYXNzLndpdGgtdmFsdWVdJzogJ2l0ZW1zLmxlbmd0aCA+IDAnLFxuICAgICdbY2xhc3MuZGlzYWJsZWRdJzogJ2Rpc2FibGVQaWNrZXJJbnB1dCcsXG4gIH0sXG59KVxuZXhwb3J0IGNsYXNzIE5vdm9DaGlwc0VsZW1lbnQgaW1wbGVtZW50cyBPbkluaXQsIENvbnRyb2xWYWx1ZUFjY2Vzc29yIHtcbiAgQElucHV0KClcbiAgY2xvc2VPblNlbGVjdDogYm9vbGVhbiA9IGZhbHNlO1xuICBASW5wdXQoKVxuICBwbGFjZWhvbGRlcjogc3RyaW5nID0gJyc7XG4gIEBJbnB1dCgpXG4gIHNvdXJjZTogYW55O1xuICBASW5wdXQoKVxuICBtYXhsZW5ndGg6IGFueTtcbiAgQElucHV0KClcbiAgdHlwZTogYW55O1xuICBASW5wdXQoKVxuICBzZXQgZGlzYWJsZVBpY2tlcklucHV0KHY6IGJvb2xlYW4pIHtcbiAgICB0aGlzLl9kaXNhYmxlUGlja2VySW5wdXQgPSBjb2VyY2VCb29sZWFuUHJvcGVydHkodik7XG4gIH1cbiAgZ2V0IGRpc2FibGVQaWNrZXJJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fZGlzYWJsZVBpY2tlcklucHV0O1xuICB9XG4gIHByaXZhdGUgX2Rpc2FibGVQaWNrZXJJbnB1dDogYm9vbGVhbiA9IGZhbHNlO1xuXG4gIEBPdXRwdXQoKVxuICBjaGFuZ2VkOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgQE91dHB1dCgpXG4gIGZvY3VzOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgQE91dHB1dCgpXG4gIGJsdXI6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICBAT3V0cHV0KClcbiAgdHlwaW5nOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuICBAVmlld0NoaWxkKCdwcmV2aWV3JywgeyByZWFkOiBWaWV3Q29udGFpbmVyUmVmIH0pXG4gIHByZXZpZXc6IFZpZXdDb250YWluZXJSZWY7XG5cbiAgaXRlbXM6IEFycmF5PGFueT4gPSBbXTtcbiAgc2VsZWN0ZWQ6IGFueSA9IG51bGw7XG4gIGNvbmZpZzogYW55ID0ge307XG4gIG1vZGVsOiBhbnk7XG4gIGl0ZW1Ub0FkZDogYW55O1xuICBwb3B1cDogYW55O1xuICAvLyBwcml2YXRlIGRhdGEgbW9kZWxcbiAgX3ZhbHVlOiBhbnkgPSAnJztcbiAgX2l0ZW1zID0gbmV3IFJlcGxheVN1YmplY3QoMSk7XG4gIC8vIFBsYWNlaG9sZGVycyBmb3IgdGhlIGNhbGxiYWNrc1xuICBvbk1vZGVsQ2hhbmdlOiBGdW5jdGlvbiA9ICgpID0+IHt9O1xuICBvbk1vZGVsVG91Y2hlZDogRnVuY3Rpb24gPSAoKSA9PiB7fTtcblxuICBjb25zdHJ1Y3RvcihwdWJsaWMgZWxlbWVudDogRWxlbWVudFJlZiwgcHJpdmF0ZSBjb21wb25lbnRVdGlsczogQ29tcG9uZW50VXRpbHMsIHB1YmxpYyBsYWJlbHM6IE5vdm9MYWJlbFNlcnZpY2UpIHt9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgdGhpcy5zZXRJdGVtcygpO1xuICB9XG5cbiAgZ2V0IHZhbHVlKCkge1xuICAgIHJldHVybiB0aGlzLl92YWx1ZTtcbiAgfVxuXG4gIEBJbnB1dCgpXG4gIHNldCB2YWx1ZShzZWxlY3RlZCkge1xuICAgIHRoaXMuaXRlbVRvQWRkID0gJyc7XG4gICAgaWYgKHNlbGVjdGVkICE9PSB0aGlzLl92YWx1ZSkge1xuICAgICAgdGhpcy5fdmFsdWUgPSBzZWxlY3RlZDtcbiAgICAgIHRoaXMuY2hhbmdlZC5lbWl0KHsgdmFsdWU6IHNlbGVjdGVkLCByYXdWYWx1ZTogdGhpcy5pdGVtcyB9KTtcbiAgICAgIHRoaXMub25Nb2RlbENoYW5nZShzZWxlY3RlZCk7XG4gICAgfVxuICB9XG5cbiAgY2xlYXJWYWx1ZSgpIHtcbiAgICB0aGlzLml0ZW1zID0gW107XG4gICAgdGhpcy5faXRlbXMubmV4dCh0aGlzLml0ZW1zKTtcbiAgICB0aGlzLnZhbHVlID0gbnVsbDtcbiAgICB0aGlzLmNoYW5nZWQuZW1pdCh7IHZhbHVlOiB0aGlzLnZhbHVlLCByYXdWYWx1ZTogdGhpcy5pdGVtcyB9KTtcbiAgICB0aGlzLm9uTW9kZWxDaGFuZ2UodGhpcy52YWx1ZSk7XG4gIH1cblxuICBzZXRJdGVtcygpIHtcbiAgICB0aGlzLml0ZW1zID0gW107XG4gICAgaWYgKHRoaXMubW9kZWwgJiYgQXJyYXkuaXNBcnJheSh0aGlzLm1vZGVsKSkge1xuICAgICAgbGV0IG5vTGFiZWxzID0gW107XG4gICAgICBmb3IgKGxldCB2YWx1ZSBvZiB0aGlzLm1vZGVsKSB7XG4gICAgICAgIGxldCBsYWJlbDtcbiAgICAgICAgaWYgKHRoaXMuc291cmNlICYmIHRoaXMuc291cmNlLmZvcm1hdCAmJiBIZWxwZXJzLnZhbGlkYXRlSW50ZXJwb2xhdGlvblByb3BzKHRoaXMuc291cmNlLmZvcm1hdCwgdmFsdWUpKSB7XG4gICAgICAgICAgbGFiZWwgPSBIZWxwZXJzLmludGVycG9sYXRlKHRoaXMuc291cmNlLmZvcm1hdCwgdmFsdWUpO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLnNvdXJjZSAmJiBsYWJlbCAmJiBsYWJlbCAhPT0gdGhpcy5zb3VyY2UuZm9ybWF0KSB7XG4gICAgICAgICAgdGhpcy5pdGVtcy5wdXNoKHtcbiAgICAgICAgICAgIHZhbHVlLFxuICAgICAgICAgICAgbGFiZWwsXG4gICAgICAgICAgfSk7XG4gICAgICAgIH0gZWxzZSBpZiAodGhpcy5zb3VyY2UuZ2V0TGFiZWxzICYmIHR5cGVvZiB0aGlzLnNvdXJjZS5nZXRMYWJlbHMgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICBub0xhYmVscy5wdXNoKHZhbHVlKTtcbiAgICAgICAgfSBlbHNlIGlmICh0aGlzLnNvdXJjZS5vcHRpb25zICYmIEFycmF5LmlzQXJyYXkodGhpcy5zb3VyY2Uub3B0aW9ucykpIHtcbiAgICAgICAgICB0aGlzLml0ZW1zLnB1c2godGhpcy5nZXRMYWJlbEZyb21PcHRpb25zKHZhbHVlKSk7XG4gICAgICAgIH0gZWxzZSBpZiAodGhpcy5zb3VyY2UuY2F0ZWdvcnlNYXAgJiYgdGhpcy5zb3VyY2UuY2F0ZWdvcnlNYXAuc2l6ZSkge1xuICAgICAgICAgIHRoaXMuaXRlbXMucHVzaCh2YWx1ZSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdGhpcy5pdGVtcy5wdXNoKHtcbiAgICAgICAgICAgIHZhbHVlLFxuICAgICAgICAgICAgbGFiZWw6IHZhbHVlLFxuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobm9MYWJlbHMubGVuZ3RoID4gMCAmJiB0aGlzLnNvdXJjZSAmJiB0aGlzLnNvdXJjZS5nZXRMYWJlbHMgJiYgdHlwZW9mIHRoaXMuc291cmNlLmdldExhYmVscyA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICB0aGlzLnNvdXJjZS5nZXRMYWJlbHMobm9MYWJlbHMpLnRoZW4oKHJlc3VsdCkgPT4ge1xuICAgICAgICAgIGZvciAobGV0IHZhbHVlIG9mIHJlc3VsdCkge1xuICAgICAgICAgICAgaWYgKHZhbHVlLmhhc093blByb3BlcnR5KCdsYWJlbCcpICYmIHZhbHVlLmhhc093blByb3BlcnR5KCd2YWx1ZScpKSB7XG4gICAgICAgICAgICAgIHRoaXMuaXRlbXMucHVzaCh7XG4gICAgICAgICAgICAgICAgdmFsdWU6IHZhbHVlLnZhbHVlLFxuICAgICAgICAgICAgICAgIGxhYmVsOiB2YWx1ZS5sYWJlbCxcbiAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKHRoaXMuc291cmNlLm9wdGlvbnMgJiYgQXJyYXkuaXNBcnJheSh0aGlzLnNvdXJjZS5vcHRpb25zKSkge1xuICAgICAgICAgICAgICB0aGlzLml0ZW1zLnB1c2godGhpcy5nZXRMYWJlbEZyb21PcHRpb25zKHZhbHVlKSk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICB0aGlzLml0ZW1zLnB1c2godmFsdWUpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgICB0aGlzLl9pdGVtcy5uZXh0KHRoaXMuaXRlbXMpO1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9XG4gICAgdGhpcy5jaGFuZ2VkLmVtaXQoeyB2YWx1ZTogdGhpcy5tb2RlbCwgcmF3VmFsdWU6IHRoaXMuaXRlbXMgfSk7XG4gICAgdGhpcy5faXRlbXMubmV4dCh0aGlzLml0ZW1zKTtcbiAgfVxuXG4gIGdldExhYmVsRnJvbU9wdGlvbnModmFsdWUpIHtcbiAgICBsZXQgb3B0TGFiZWwgPSB0aGlzLnNvdXJjZS5vcHRpb25zLmZpbmQoKHZhbCkgPT4gdmFsLnZhbHVlID09PSB2YWx1ZSk7XG4gICAgcmV0dXJuIHtcbiAgICAgIHZhbHVlLFxuICAgICAgbGFiZWw6IG9wdExhYmVsID8gb3B0TGFiZWwubGFiZWwgOiB2YWx1ZSxcbiAgICB9O1xuICB9XG5cbiAgZGVzZWxlY3RBbGwoZXZlbnQ/KSB7XG4gICAgdGhpcy5zZWxlY3RlZCA9IG51bGw7XG4gICAgdGhpcy5oaWRlUHJldmlldygpO1xuICB9XG5cbiAgc2VsZWN0KGV2ZW50PywgaXRlbT8pIHtcbiAgICB0aGlzLmJsdXIuZW1pdChldmVudCk7XG4gICAgdGhpcy5kZXNlbGVjdEFsbCgpO1xuICAgIHRoaXMuc2VsZWN0ZWQgPSBpdGVtO1xuICAgIHRoaXMuc2hvd1ByZXZpZXcoKTtcbiAgfVxuXG4gIGRlc2VsZWN0KGV2ZW50PywgaXRlbT8pIHtcbiAgICB0aGlzLmJsdXIuZW1pdChldmVudCk7XG4gICAgdGhpcy5kZXNlbGVjdEFsbCgpO1xuICB9XG5cbiAgb25UeXBpbmcoZXZlbnQ/KSB7XG4gICAgdGhpcy50eXBpbmcuZW1pdChldmVudCk7XG4gIH1cblxuICBvbkZvY3VzKGV2ZW50Pykge1xuICAgIHRoaXMuZGVzZWxlY3RBbGwoKTtcbiAgICB0aGlzLmVsZW1lbnQubmF0aXZlRWxlbWVudC5jbGFzc0xpc3QuYWRkKCdzZWxlY3RlZCcpO1xuICAgIHRoaXMuZm9jdXMuZW1pdChldmVudCk7XG4gIH1cblxuICBhZGQoZXZlbnQpIHtcbiAgICBpZiAoZXZlbnQgJiYgIShldmVudCBpbnN0YW5jZW9mIEV2ZW50KSkge1xuICAgICAgdGhpcy5pdGVtcy5wdXNoKGV2ZW50KTtcbiAgICAgIHRoaXMudmFsdWUgPSB0aGlzLnNvdXJjZSAmJiB0aGlzLnNvdXJjZS52YWx1ZUZvcm1hdHRlciA/IHRoaXMuc291cmNlLnZhbHVlRm9ybWF0dGVyKHRoaXMuaXRlbXMpIDogdGhpcy5pdGVtcy5tYXAoKGkpID0+IGkudmFsdWUpO1xuICAgICAgLy8gU2V0IGZvY3VzIG9uIHRoZSBwaWNrZXJcbiAgICAgIGxldCBpbnB1dCA9IHRoaXMuZWxlbWVudC5uYXRpdmVFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJ25vdm8tcGlja2VyID4gaW5wdXQnKTtcbiAgICAgIGlmIChpbnB1dCkge1xuICAgICAgICBpbnB1dC5mb2N1cygpO1xuICAgICAgfVxuICAgIH1cbiAgICB0aGlzLl9pdGVtcy5uZXh0KHRoaXMuaXRlbXMpO1xuICB9XG5cbiAgcmVtb3ZlKGV2ZW50LCBpdGVtKSB7XG4gICAgaWYgKGV2ZW50KSB7XG4gICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgfVxuICAgIHRoaXMuaXRlbXMuc3BsaWNlKHRoaXMuaXRlbXMuaW5kZXhPZihpdGVtKSwgMSk7XG4gICAgdGhpcy5kZXNlbGVjdEFsbCgpO1xuICAgIHRoaXMudmFsdWUgPSB0aGlzLnNvdXJjZSAmJiB0aGlzLnNvdXJjZS52YWx1ZUZvcm1hdHRlciA/IHRoaXMuc291cmNlLnZhbHVlRm9ybWF0dGVyKHRoaXMuaXRlbXMpIDogdGhpcy5pdGVtcy5tYXAoKGkpID0+IGkudmFsdWUpO1xuICAgIHRoaXMuY2hhbmdlZC5lbWl0KHsgdmFsdWU6IHRoaXMudmFsdWUubGVuZ3RoID8gdGhpcy52YWx1ZSA6ICcnLCByYXdWYWx1ZTogdGhpcy5pdGVtcyB9KTtcbiAgICB0aGlzLm9uTW9kZWxDaGFuZ2UodGhpcy52YWx1ZS5sZW5ndGggPyB0aGlzLnZhbHVlIDogJycpO1xuICAgIHRoaXMuX2l0ZW1zLm5leHQodGhpcy5pdGVtcyk7XG4gIH1cblxuICBvbktleURvd24oZXZlbnQpIHtcbiAgICBpZiAoZXZlbnQua2V5Q29kZSA9PT0gS2V5Q29kZXMuQkFDS1NQQUNFKSB7XG4gICAgICBpZiAoZXZlbnQudGFyZ2V0ICYmIGV2ZW50LnRhcmdldC52YWx1ZS5sZW5ndGggPT09IDAgJiYgdGhpcy5pdGVtcy5sZW5ndGgpIHtcbiAgICAgICAgaWYgKGV2ZW50KSB7XG4gICAgICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5zZWxlY3RlZCkge1xuICAgICAgICAgIHRoaXMucmVtb3ZlKGV2ZW50LCB0aGlzLnNlbGVjdGVkKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0aGlzLnNlbGVjdChldmVudCwgdGhpcy5pdGVtc1t0aGlzLml0ZW1zLmxlbmd0aCAtIDFdKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC8vIFNldCB0b3VjaGVkIG9uIGJsdXJcbiAgb25Ub3VjaGVkKGUpIHtcbiAgICB0aGlzLmVsZW1lbnQubmF0aXZlRWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKCdzZWxlY3RlZCcpO1xuICAgIHRoaXMub25Nb2RlbFRvdWNoZWQoKTtcbiAgICB0aGlzLmJsdXIuZW1pdChlKTtcbiAgfVxuXG4gIHdyaXRlVmFsdWUobW9kZWw6IGFueSk6IHZvaWQge1xuICAgIHRoaXMubW9kZWwgPSBtb2RlbDtcbiAgICB0aGlzLnNldEl0ZW1zKCk7XG4gIH1cblxuICByZWdpc3Rlck9uQ2hhbmdlKGZuOiBGdW5jdGlvbik6IHZvaWQge1xuICAgIHRoaXMub25Nb2RlbENoYW5nZSA9IGZuO1xuICB9XG5cbiAgcmVnaXN0ZXJPblRvdWNoZWQoZm46IEZ1bmN0aW9uKTogdm9pZCB7XG4gICAgdGhpcy5vbk1vZGVsVG91Y2hlZCA9IGZuO1xuICB9XG5cbiAgc2V0RGlzYWJsZWRTdGF0ZShkaXNhYmxlZDogYm9vbGVhbik6IHZvaWQge1xuICAgIHRoaXMuX2Rpc2FibGVQaWNrZXJJbnB1dCA9IGRpc2FibGVkO1xuICB9XG5cbiAgLyoqXG4gICAqIEBuYW1lIHNob3dQcmV2aWV3XG4gICAqXG4gICAqIEBkZXNjcmlwdGlvbiBUaGlzIG1ldGhvZCBjcmVhdGVzIGFuIGluc3RhbmNlIG9mIHRoZSBwcmV2aWV3IChjYWxsZWQgcG9wdXApIGFuZCBhZGRzIGFsbCB0aGUgYmluZGluZ3MgdG8gdGhhdFxuICAgKiBpbnN0YW5jZS4gV2lsbCByZXVzZSB0aGUgcG9wdXAgb3IgY3JlYXRlIGEgbmV3IG9uZSBpZiBpdCBkb2VzIG5vdCBhbHJlYWR5IGV4aXN0LiBXaWxsIG9ubHkgd29yayBpZiB0aGVyZSBpc1xuICAgKiBhIHByZXZpZXdUZW1wbGF0ZSBnaXZlbiBpbiB0aGUgY29uZmlnLlxuICAgKi9cbiAgc2hvd1ByZXZpZXcoKSB7XG4gICAgaWYgKHRoaXMuc291cmNlLnByZXZpZXdUZW1wbGF0ZSkge1xuICAgICAgaWYgKCF0aGlzLnBvcHVwKSB7XG4gICAgICAgIHRoaXMucG9wdXAgPSB0aGlzLmNvbXBvbmVudFV0aWxzLmFwcGVuZE5leHRUb0xvY2F0aW9uKHRoaXMuc291cmNlLnByZXZpZXdUZW1wbGF0ZSwgdGhpcy5wcmV2aWV3KTtcbiAgICAgIH1cbiAgICAgIHRoaXMucG9wdXAuaW5zdGFuY2UubWF0Y2ggPSB0aGlzLnNlbGVjdGVkO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBAbmFtZSBoaWRlUHJldmlld1xuICAgKlxuICAgKiBAZGVzY3JpcHRpb24gLSBUaGlzIG1ldGhvZCBkZWxldGVzIHRoZSBwcmV2aWV3IHBvcHVwIGZyb20gdGhlIERPTS5cbiAgICovXG4gIGhpZGVQcmV2aWV3KCkge1xuICAgIGlmICh0aGlzLnBvcHVwKSB7XG4gICAgICB0aGlzLnBvcHVwLmRlc3Ryb3koKTtcbiAgICAgIHRoaXMucG9wdXAgPSBudWxsO1xuICAgIH1cbiAgfVxufVxuIl19