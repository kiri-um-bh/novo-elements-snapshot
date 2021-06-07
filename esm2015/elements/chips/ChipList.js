import { FocusKeyManager } from '@angular/cdk/a11y';
import { Directionality } from '@angular/cdk/bidi';
import { coerceBooleanProperty } from '@angular/cdk/coercion';
import { SelectionModel } from '@angular/cdk/collections';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ContentChildren, ElementRef, EventEmitter, Input, Optional, Output, QueryList, Self, ViewEncapsulation, } from '@angular/core';
import { FormGroupDirective, NgControl, NgForm } from '@angular/forms';
import { merge, Subject } from 'rxjs';
import { startWith, takeUntil } from 'rxjs/operators';
import { ErrorStateMatcher, mixinErrorState } from '../common';
import { NovoFieldControl } from '../field';
import { NovoChipElement } from './Chip';
import * as i0 from "@angular/core";
import * as i1 from "@angular/cdk/bidi";
import * as i2 from "@angular/forms";
import * as i3 from "../common";
const _c0 = ["*"];
// Boilerplate for applying mixins to NovoChipList.
/** @docs-private */
class NovoChipListBase {
    constructor(_defaultErrorStateMatcher, _parentForm, _parentFormGroup, 
    /** @docs-private */
    ngControl) {
        this._defaultErrorStateMatcher = _defaultErrorStateMatcher;
        this._parentForm = _parentForm;
        this._parentFormGroup = _parentFormGroup;
        this.ngControl = ngControl;
    }
}
const _NovoChipListMixinBase = mixinErrorState(NovoChipListBase);
// Increasing integer for generating unique ids for chip-list components.
let nextUniqueId = 0;
/** Change event object that is emitted when the chip list value has changed. */
export class NovoChipListChange {
    constructor(
    /** Chip list that emitted the event. */
    source, 
    /** Value of the chip list when the event was emitted. */
    value) {
        this.source = source;
        this.value = value;
    }
}
/**
 * A material design chips component (named ChipList for its similarity to the List component).
 */
export class NovoChipList extends _NovoChipListMixinBase {
    constructor(_elementRef, _changeDetectorRef, _dir, _parentForm, _parentFormGroup, _defaultErrorStateMatcher, 
    /** @docs-private */
    ngControl) {
        super(_defaultErrorStateMatcher, _parentForm, _parentFormGroup, ngControl);
        this._elementRef = _elementRef;
        this._changeDetectorRef = _changeDetectorRef;
        this._dir = _dir;
        this.ngControl = ngControl;
        /**
         * Implemented as part of NovoFieldControl.
         * @docs-private
         */
        this.controlType = 'novo-chip-list';
        /**
         * When a chip is destroyed, we store the index of the destroyed chip until the chips
         * query list notifies about the update. This is necessary because we cannot determine an
         * appropriate chip that should receive focus until the array of chips updated completely.
         */
        this._lastDestroyedChipIndex = null;
        /** Subject that emits when the component has been destroyed. */
        this._destroyed = new Subject();
        /** Uid of the chip list */
        this._uid = `novo-chip-list-${nextUniqueId++}`;
        /** Tab index for the chip list. */
        this._tabIndex = 0;
        /**
         * User defined tab index.
         * When it is not null, use user defined tab index. Otherwise use _tabIndex
         */
        this._userTabIndex = null;
        /** Function when touched */
        this._onTouched = () => { };
        /** Function when changed */
        this._onChange = () => { };
        this._multiple = false;
        this._stacked = false;
        this._compareWith = (o1, o2) => o1 === o2;
        this._required = false;
        this._disabled = false;
        /** Orientation of the chip list. */
        this.ariaOrientation = 'horizontal';
        this._selectable = true;
        /** Event emitted when the selected chip list value has been changed by the user. */
        this.change = new EventEmitter();
        /**
         * Event that emits whenever the raw value of the chip-list changes. This is here primarily
         * to facilitate the two-way binding for the `value` input.
         * @docs-private
         */
        this.valueChange = new EventEmitter();
        if (this.ngControl) {
            this.ngControl.valueAccessor = this;
        }
    }
    /** The array of selected chips inside chip list. */
    get selected() {
        return this.multiple ? this._selectionModel.selected : this._selectionModel.selected[0];
    }
    /** The ARIA role applied to the chip list. */
    get role() {
        return this.empty ? null : 'listbox';
    }
    /** Whether the user should be allowed to select multiple chips. */
    get multiple() {
        return this._multiple;
    }
    set multiple(value) {
        this._multiple = coerceBooleanProperty(value);
        this._syncChipsState();
    }
    /** Whether the chips should appear stacked instead of a row. */
    get stacked() {
        return this._stacked;
    }
    set stacked(value) {
        this._stacked = coerceBooleanProperty(value);
    }
    /**
     * A function to compare the option values with the selected values. The first argument
     * is a value from an option. The second is a value from the selection. A boolean
     * should be returned.
     */
    get compareWith() {
        return this._compareWith;
    }
    set compareWith(fn) {
        this._compareWith = fn;
        if (this._selectionModel) {
            // A different comparator means the selection could change.
            this._initializeSelection();
        }
    }
    /**
     * Implemented as part of NovoFieldControl.
     * @docs-private
     */
    get value() {
        return this._value;
    }
    set value(value) {
        this.writeValue(value);
        this._value = value;
    }
    /**
     * Implemented as part of NovoFieldControl.
     * @docs-private
     */
    get id() {
        return this._chipInput ? this._chipInput.id : this._uid;
    }
    /**
     * Implemented as part of NovoFieldControl.
     * @docs-private
     */
    get required() {
        return this._required;
    }
    set required(value) {
        this._required = coerceBooleanProperty(value);
        this.stateChanges.next();
    }
    /**
     * Implemented as part of NovoFieldControl.
     * @docs-private
     */
    get placeholder() {
        return this._chipInput ? this._chipInput.placeholder : this._placeholder;
    }
    set placeholder(value) {
        this._placeholder = value;
        this.stateChanges.next();
    }
    /** Whether any chips or the matChipInput inside of this chip-list has focus. */
    get focused() {
        return (this._chipInput && this._chipInput.focused) || this._hasFocusedChip();
    }
    /**
     * Implemented as part of NovoFieldControl.
     * @docs-private
     */
    get empty() {
        return (!this._chipInput || this._chipInput.empty) && (!this.chips || this.chips.length === 0);
    }
    /**
     * Implemented as part of NovoFieldControl.
     * @docs-private
     */
    get shouldLabelFloat() {
        return !this.empty || this.focused;
    }
    /**
     * Implemented as part of NovoFieldControl.
     * @docs-private
     */
    get disabled() {
        return this.ngControl ? !!this.ngControl.disabled : this._disabled;
    }
    set disabled(value) {
        this._disabled = coerceBooleanProperty(value);
        this._syncChipsState();
    }
    /**
     * Whether or not this chip list is selectable. When a chip list is not selectable,
     * the selected states for all the chips inside the chip list are always ignored.
     */
    get selectable() {
        return this._selectable;
    }
    set selectable(value) {
        this._selectable = coerceBooleanProperty(value);
        if (this.chips) {
            this.chips.forEach((chip) => (chip.chipListSelectable = this._selectable));
        }
    }
    set tabIndex(value) {
        this._userTabIndex = value;
        this._tabIndex = value;
    }
    /** Combined stream of all of the child chips' selection change events. */
    get chipSelectionChanges() {
        return merge(...this.chips.map((chip) => chip.selectionChange));
    }
    /** Combined stream of all of the child chips' focus change events. */
    get chipFocusChanges() {
        return merge(...this.chips.map((chip) => chip._onFocus));
    }
    /** Combined stream of all of the child chips' blur change events. */
    get chipBlurChanges() {
        return merge(...this.chips.map((chip) => chip._onBlur));
    }
    /** Combined stream of all of the child chips' remove change events. */
    get chipRemoveChanges() {
        return merge(...this.chips.map((chip) => chip.destroyed));
    }
    ngAfterContentInit() {
        this._keyManager = new FocusKeyManager(this.chips)
            .withWrap()
            .withVerticalOrientation()
            .withHomeAndEnd()
            .withHorizontalOrientation(this._dir ? this._dir.value : 'ltr');
        if (this._dir) {
            this._dir.change.pipe(takeUntil(this._destroyed)).subscribe((dir) => this._keyManager.withHorizontalOrientation(dir));
        }
        this._keyManager.tabOut.pipe(takeUntil(this._destroyed)).subscribe(() => {
            this._allowFocusEscape();
        });
        // When the list changes, re-subscribe
        this.chips.changes.pipe(startWith(null), takeUntil(this._destroyed)).subscribe(() => {
            if (this.disabled) {
                // Since this happens after the content has been
                // checked, we need to defer it to the next tick.
                Promise.resolve().then(() => {
                    this._syncChipsState();
                });
            }
            this._resetChips();
            // Reset chips selected/deselected status
            this._initializeSelection();
            // Check to see if we need to update our tab index
            this._updateTabIndex();
            // Check to see if we have a destroyed chip and need to refocus
            this._updateFocusForDestroyedChips();
            this.stateChanges.next();
        });
    }
    ngOnInit() {
        this._selectionModel = new SelectionModel(this.multiple, undefined, false);
        this.stateChanges.next();
    }
    ngDoCheck() {
        if (this.ngControl) {
            // We need to re-evaluate this on every change detection cycle, because there are some
            // error triggers that we can't subscribe to (e.g. parent form submissions). This means
            // that whatever logic is in here has to be super lean or we risk destroying the performance.
            this.updateErrorState();
            if (this.ngControl.disabled !== this._disabled) {
                this.disabled = !!this.ngControl.disabled;
            }
        }
    }
    ngOnDestroy() {
        this._destroyed.next();
        this._destroyed.complete();
        this.stateChanges.complete();
        this._dropSubscriptions();
    }
    /** Associates an HTML input element with this chip list. */
    registerInput(inputElement) {
        this._chipInput = inputElement;
        // We use this attribute to match the chip list to its input in test harnesses.
        // Set the attribute directly here to avoid "changed after checked" errors.
        this._elementRef.nativeElement.setAttribute('data-novo-chip-input', inputElement.id);
    }
    /**
     * Implemented as part of NovoFieldControl.
     * @docs-private
     */
    setDescribedByIds(ids) {
        this._ariaDescribedby = ids.join(' ');
    }
    // Implemented as part of ControlValueAccessor.
    writeValue(value) {
        if (this.chips) {
            this._setSelectionByValue(value, false);
        }
    }
    // Implemented as part of ControlValueAccessor.
    registerOnChange(fn) {
        this._onChange = fn;
    }
    // Implemented as part of ControlValueAccessor.
    registerOnTouched(fn) {
        this._onTouched = fn;
    }
    // Implemented as part of ControlValueAccessor.
    setDisabledState(isDisabled) {
        this.disabled = isDisabled;
        this.stateChanges.next();
    }
    /**
     * Implemented as part of NovoFieldControl.
     * @docs-private
     */
    onContainerClick(event) {
        if (!this._originatesFromChip(event)) {
            this.focus();
        }
    }
    /**
     * Focuses the first non-disabled chip in this chip list, or the associated input when there
     * are no eligible chips.
     */
    focus(options) {
        if (this.disabled) {
            return;
        }
        // TODO: ARIA says this should focus the first `selected` chip if any are selected.
        // Focus on first element if there's no chipInput inside chip-list
        if (this._chipInput && this._chipInput.focused) {
            // do nothing
        }
        else if (this._chipInput) {
            this._focusInput(options);
            this.stateChanges.next();
        }
        else if (this.chips.length > 0) {
            this._keyManager.setFirstItemActive();
            this.stateChanges.next();
        }
    }
    /** Attempt to focus an input if we have one. */
    _focusInput(options) {
        if (this._chipInput) {
            this._chipInput.focus(options);
        }
    }
    /**
     * Pass events to the keyboard manager. Available here for tests.
     */
    _keydown(event) {
        const target = event.target;
        // If they are on an empty input and hit backspace, focus the last chip
        if (event.key === "Backspace" /* Backspace */ && this._isInputEmpty(target)) {
            this._keyManager.setLastItemActive();
            event.preventDefault();
        }
        else if (target && target.classList.contains('novo-chip')) {
            this._keyManager.onKeydown(event);
            this.stateChanges.next();
        }
    }
    /**
     * Check the tab index as you should not be allowed to focus an empty list.
     */
    _updateTabIndex() {
        // If we have 0 chips, we should not allow keyboard focus
        this._tabIndex = this._userTabIndex || (this.chips.length === 0 ? -1 : 0);
    }
    /**
     * If the amount of chips changed, we need to update the
     * key manager state and focus the next closest chip.
     */
    _updateFocusForDestroyedChips() {
        // Move focus to the closest chip. If no other chips remain, focus the chip-list itself.
        if (this._lastDestroyedChipIndex != null) {
            if (this.chips.length) {
                const newChipIndex = Math.min(this._lastDestroyedChipIndex, this.chips.length - 1);
                this._keyManager.setActiveItem(newChipIndex);
            }
            else {
                this.focus();
            }
        }
        this._lastDestroyedChipIndex = null;
    }
    /**
     * Utility to ensure all indexes are valid.
     *
     * @param index The index to be checked.
     * @returns True if the index is valid for our list of chips.
     */
    _isValidIndex(index) {
        return index >= 0 && index < this.chips.length;
    }
    _isInputEmpty(element) {
        if (element && element.nodeName.toLowerCase() === 'input') {
            let input = element;
            return !input.value;
        }
        return false;
    }
    _setSelectionByValue(value, isUserInput = true) {
        this._clearSelection();
        this.chips.forEach((chip) => chip.deselect());
        if (Array.isArray(value)) {
            value.forEach((currentValue) => this._selectValue(currentValue, isUserInput));
            this._sortValues();
        }
        else {
            const correspondingChip = this._selectValue(value, isUserInput);
            // Shift focus to the active item. Note that we shouldn't do this in multiple
            // mode, because we don't know what chip the user interacted with last.
            if (correspondingChip) {
                if (isUserInput) {
                    this._keyManager.setActiveItem(correspondingChip);
                }
            }
        }
    }
    /**
     * Finds and selects the chip based on its value.
     * @returns Chip that has the corresponding value.
     */
    _selectValue(value, isUserInput = true) {
        const correspondingChip = this.chips.find((chip) => {
            return chip.value != null && this._compareWith(chip.value, value);
        });
        if (correspondingChip) {
            isUserInput ? correspondingChip.selectViaInteraction() : correspondingChip.select();
            this._selectionModel.select(correspondingChip);
        }
        return correspondingChip;
    }
    _initializeSelection() {
        // Defer setting the value in order to avoid the "Expression
        // has changed after it was checked" errors from Angular.
        Promise.resolve().then(() => {
            if (this.ngControl || this._value) {
                this._setSelectionByValue(this.ngControl ? this.ngControl.value : this._value, false);
                this.stateChanges.next();
            }
        });
    }
    /**
     * Deselects every chip in the list.
     * @param skip Chip that should not be deselected.
     */
    _clearSelection(skip) {
        this._selectionModel.clear();
        this.chips.forEach((chip) => {
            if (chip !== skip) {
                chip.deselect();
            }
        });
        this.stateChanges.next();
    }
    /**
     * Sorts the model values, ensuring that they keep the same
     * order that they have in the panel.
     */
    _sortValues() {
        if (this._multiple) {
            this._selectionModel.clear();
            this.chips.forEach((chip) => {
                if (chip.selected) {
                    this._selectionModel.select(chip);
                }
            });
            this.stateChanges.next();
        }
    }
    /** Emits change event to set the model value. */
    _propagateChanges(fallbackValue) {
        let valueToEmit = null;
        if (Array.isArray(this.selected)) {
            valueToEmit = this.selected.map((chip) => chip.value);
        }
        else {
            valueToEmit = this.selected ? this.selected.value : fallbackValue;
        }
        this._value = valueToEmit;
        this.change.emit(new NovoChipListChange(this, valueToEmit));
        this.valueChange.emit(valueToEmit);
        this._onChange(valueToEmit);
        this._changeDetectorRef.markForCheck();
    }
    /** When blurred, mark the field as touched when focus moved outside the chip list. */
    _blur() {
        if (!this._hasFocusedChip()) {
            this._keyManager.setActiveItem(-1);
        }
        if (!this.disabled) {
            if (this._chipInput) {
                // If there's a chip input, we should check whether the focus moved to chip input.
                // If the focus is not moved to chip input, mark the field as touched. If the focus moved
                // to chip input, do nothing.
                // Timeout is needed to wait for the focus() event trigger on chip input.
                setTimeout(() => {
                    if (!this.focused) {
                        this._markAsTouched();
                    }
                });
            }
            else {
                // If there's no chip input, then mark the field as touched.
                this._markAsTouched();
            }
        }
    }
    /** Mark the field as touched */
    _markAsTouched() {
        this._onTouched();
        this._changeDetectorRef.markForCheck();
        this.stateChanges.next();
    }
    /**
     * Removes the `tabindex` from the chip list and resets it back afterwards, allowing the
     * user to tab out of it. This prevents the list from capturing focus and redirecting
     * it back to the first chip, creating a focus trap, if it user tries to tab away.
     */
    _allowFocusEscape() {
        if (this._tabIndex !== -1) {
            this._tabIndex = -1;
            setTimeout(() => {
                this._tabIndex = this._userTabIndex || 0;
                this._changeDetectorRef.markForCheck();
            });
        }
    }
    _resetChips() {
        this._dropSubscriptions();
        this._listenToChipsFocus();
        this._listenToChipsSelection();
        this._listenToChipsRemoved();
    }
    _dropSubscriptions() {
        if (this._chipFocusSubscription) {
            this._chipFocusSubscription.unsubscribe();
            this._chipFocusSubscription = null;
        }
        if (this._chipBlurSubscription) {
            this._chipBlurSubscription.unsubscribe();
            this._chipBlurSubscription = null;
        }
        if (this._chipSelectionSubscription) {
            this._chipSelectionSubscription.unsubscribe();
            this._chipSelectionSubscription = null;
        }
        if (this._chipRemoveSubscription) {
            this._chipRemoveSubscription.unsubscribe();
            this._chipRemoveSubscription = null;
        }
    }
    /** Listens to user-generated selection events on each chip. */
    _listenToChipsSelection() {
        this._chipSelectionSubscription = this.chipSelectionChanges.subscribe((event) => {
            event.source.selected ? this._selectionModel.select(event.source) : this._selectionModel.deselect(event.source);
            // For single selection chip list, make sure the deselected value is unselected.
            if (!this.multiple) {
                this.chips.forEach((chip) => {
                    if (!this._selectionModel.isSelected(chip) && chip.selected) {
                        chip.deselect();
                    }
                });
            }
            if (event.isUserInput) {
                this._propagateChanges();
            }
        });
    }
    /** Listens to user-generated selection events on each chip. */
    _listenToChipsFocus() {
        this._chipFocusSubscription = this.chipFocusChanges.subscribe((event) => {
            let chipIndex = this.chips.toArray().indexOf(event.chip);
            if (this._isValidIndex(chipIndex)) {
                this._keyManager.updateActiveItem(chipIndex);
            }
            this.stateChanges.next();
        });
        this._chipBlurSubscription = this.chipBlurChanges.subscribe(() => {
            this._blur();
            this.stateChanges.next();
        });
    }
    _listenToChipsRemoved() {
        this._chipRemoveSubscription = this.chipRemoveChanges.subscribe((event) => {
            const chip = event.chip;
            const chipIndex = this.chips.toArray().indexOf(event.chip);
            // In case the chip that will be removed is currently focused, we temporarily store
            // the index in order to be able to determine an appropriate sibling chip that will
            // receive focus.
            if (this._isValidIndex(chipIndex) && chip._hasFocus) {
                this._lastDestroyedChipIndex = chipIndex;
            }
        });
    }
    /** Checks whether an event comes from inside a chip element. */
    _originatesFromChip(event) {
        let currentElement = event.target;
        while (currentElement && currentElement !== this._elementRef.nativeElement) {
            if (currentElement.classList.contains('novo-chip')) {
                return true;
            }
            currentElement = currentElement.parentElement;
        }
        return false;
    }
    /** Checks whether any of the chips is focused. */
    _hasFocusedChip() {
        return this.chips && this.chips.some((chip) => chip._hasFocus);
    }
    /** Syncs the list's state with the individual chips. */
    _syncChipsState() {
        if (this.chips) {
            this.chips.forEach((chip) => {
                chip._chipListDisabled = this._disabled;
                chip._chipListMultiple = this.multiple;
            });
        }
    }
}
NovoChipList.ɵfac = function NovoChipList_Factory(t) { return new (t || NovoChipList)(i0.ɵɵdirectiveInject(i0.ElementRef), i0.ɵɵdirectiveInject(i0.ChangeDetectorRef), i0.ɵɵdirectiveInject(i1.Directionality, 8), i0.ɵɵdirectiveInject(i2.NgForm, 8), i0.ɵɵdirectiveInject(i2.FormGroupDirective, 8), i0.ɵɵdirectiveInject(i3.ErrorStateMatcher), i0.ɵɵdirectiveInject(i2.NgControl, 10)); };
NovoChipList.ɵcmp = i0.ɵɵdefineComponent({ type: NovoChipList, selectors: [["novo-chip-list"]], contentQueries: function NovoChipList_ContentQueries(rf, ctx, dirIndex) { if (rf & 1) {
        i0.ɵɵcontentQuery(dirIndex, NovoChipElement, true);
    } if (rf & 2) {
        var _t;
        i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.chips = _t);
    } }, hostAttrs: [1, "novo-chip-list"], hostVars: 19, hostBindings: function NovoChipList_HostBindings(rf, ctx) { if (rf & 1) {
        i0.ɵɵlistener("focus", function NovoChipList_focus_HostBindingHandler() { return ctx.focus(); })("blur", function NovoChipList_blur_HostBindingHandler() { return ctx._blur(); })("keydown", function NovoChipList_keydown_HostBindingHandler($event) { return ctx._keydown($event); });
    } if (rf & 2) {
        i0.ɵɵhostProperty("id", ctx._uid);
        i0.ɵɵattribute("tabindex", ctx.disabled ? null : ctx._tabIndex)("aria-describedby", ctx._ariaDescribedby || null)("aria-required", ctx.role ? ctx.required : null)("aria-disabled", ctx.disabled.toString())("aria-invalid", ctx.errorState)("aria-multiselectable", ctx.multiple)("role", ctx.role)("aria-orientation", ctx.ariaOrientation);
        i0.ɵɵclassProp("novo-chip-list-stacked", ctx.stacked)("novo-chip-list-focused", ctx.focused)("novo-chip-list-disabled", ctx.disabled)("novo-chip-list-invalid", ctx.errorState)("novo-chip-list-required", ctx.required);
    } }, inputs: { errorStateMatcher: "errorStateMatcher", multiple: "multiple", stacked: "stacked", compareWith: "compareWith", value: "value", required: "required", placeholder: "placeholder", disabled: "disabled", ariaOrientation: ["aria-orientation", "ariaOrientation"], selectable: "selectable", tabIndex: "tabIndex" }, outputs: { change: "change", valueChange: "valueChange" }, exportAs: ["novoChipList"], features: [i0.ɵɵProvidersFeature([{ provide: NovoFieldControl, useExisting: NovoChipList }]), i0.ɵɵInheritDefinitionFeature], ngContentSelectors: _c0, decls: 2, vars: 0, consts: [[1, "novo-chip-list-wrapper"]], template: function NovoChipList_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵprojectionDef();
        i0.ɵɵelementStart(0, "div", 0);
        i0.ɵɵprojection(1);
        i0.ɵɵelementEnd();
    } }, encapsulation: 2, changeDetection: 0 });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(NovoChipList, [{
        type: Component,
        args: [{
                selector: 'novo-chip-list',
                template: `<div class="novo-chip-list-wrapper"><ng-content></ng-content></div>`,
                exportAs: 'novoChipList',
                host: {
                    '[attr.tabindex]': 'disabled ? null : _tabIndex',
                    '[attr.aria-describedby]': '_ariaDescribedby || null',
                    '[attr.aria-required]': 'role ? required : null',
                    '[attr.aria-disabled]': 'disabled.toString()',
                    '[attr.aria-invalid]': 'errorState',
                    '[attr.aria-multiselectable]': 'multiple',
                    '[attr.role]': 'role',
                    '[class.novo-chip-list-stacked]': 'stacked',
                    '[class.novo-chip-list-focused]': 'focused',
                    '[class.novo-chip-list-disabled]': 'disabled',
                    '[class.novo-chip-list-invalid]': 'errorState',
                    '[class.novo-chip-list-required]': 'required',
                    '[attr.aria-orientation]': 'ariaOrientation',
                    class: 'novo-chip-list',
                    '(focus)': 'focus()',
                    '(blur)': '_blur()',
                    '(keydown)': '_keydown($event)',
                    '[id]': '_uid',
                },
                providers: [{ provide: NovoFieldControl, useExisting: NovoChipList }],
                // styleUrls: ['./ChipList.scss'],
                encapsulation: ViewEncapsulation.None,
                changeDetection: ChangeDetectionStrategy.OnPush,
            }]
    }], function () { return [{ type: i0.ElementRef }, { type: i0.ChangeDetectorRef }, { type: i1.Directionality, decorators: [{
                type: Optional
            }] }, { type: i2.NgForm, decorators: [{
                type: Optional
            }] }, { type: i2.FormGroupDirective, decorators: [{
                type: Optional
            }] }, { type: i3.ErrorStateMatcher }, { type: i2.NgControl, decorators: [{
                type: Optional
            }, {
                type: Self
            }] }]; }, { errorStateMatcher: [{
            type: Input
        }], multiple: [{
            type: Input
        }], stacked: [{
            type: Input
        }], compareWith: [{
            type: Input
        }], value: [{
            type: Input
        }], required: [{
            type: Input
        }], placeholder: [{
            type: Input
        }], disabled: [{
            type: Input
        }], ariaOrientation: [{
            type: Input,
            args: ['aria-orientation']
        }], selectable: [{
            type: Input
        }], tabIndex: [{
            type: Input
        }], change: [{
            type: Output
        }], valueChange: [{
            type: Output
        }], chips: [{
            type: ContentChildren,
            args: [NovoChipElement, {
                    // We need to use `descendants: true`, because Ivy will no longer match
                    // indirect descendants if it's left as false.
                    descendants: true,
                }]
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ2hpcExpc3QuanMiLCJzb3VyY2VSb290IjoiL2hvbWUvcnVubmVyL3dvcmsvbm92by1lbGVtZW50cy9ub3ZvLWVsZW1lbnRzL3Byb2plY3RzL25vdm8tZWxlbWVudHMvc3JjLyIsInNvdXJjZXMiOlsiZWxlbWVudHMvY2hpcHMvQ2hpcExpc3QudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBQ3BELE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUNuRCxPQUFPLEVBQWdCLHFCQUFxQixFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFDNUUsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLDBCQUEwQixDQUFDO0FBQzFELE9BQU8sRUFFTCx1QkFBdUIsRUFDdkIsaUJBQWlCLEVBQ2pCLFNBQVMsRUFDVCxlQUFlLEVBRWYsVUFBVSxFQUNWLFlBQVksRUFDWixLQUFLLEVBR0wsUUFBUSxFQUNSLE1BQU0sRUFDTixTQUFTLEVBQ1QsSUFBSSxFQUNKLGlCQUFpQixHQUNsQixNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQXdCLGtCQUFrQixFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUM3RixPQUFPLEVBQUUsS0FBSyxFQUFjLE9BQU8sRUFBZ0IsTUFBTSxNQUFNLENBQUM7QUFDaEUsT0FBTyxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUV0RCxPQUFPLEVBQWdELGlCQUFpQixFQUFFLGVBQWUsRUFBRSxNQUFNLFdBQVcsQ0FBQztBQUM3RyxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxVQUFVLENBQUM7QUFDNUMsT0FBTyxFQUFFLGVBQWUsRUFBMEMsTUFBTSxRQUFRLENBQUM7Ozs7OztBQUdqRixtREFBbUQ7QUFDbkQsb0JBQW9CO0FBQ3BCLE1BQU0sZ0JBQWdCO0lBQ3BCLFlBQ1MseUJBQTRDLEVB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LFVBQVU7b0JBQzdDLGdDQUFnQyxFQUFFLFlBQVk7b0JBQzlDLGlDQUFpQyxFQUFFLFVBQVU7b0JBQzdDLHlCQUF5QixFQUFFLGlCQUFpQjtvQkFDNUMsS0FBSyxFQUFFLGdCQUFnQjtvQkFDdkIsU0FBUyxFQUFFLFNBQVM7b0JBQ3BCLFFBQVEsRUFBRSxTQUFTO29CQUNuQixXQUFXLEVBQUUsa0JBQWtCO29CQUMvQixNQUFNLEVBQUUsTUFBTTtpQkFDZjtnQkFDRCxTQUFTLEVBQUUsQ0FBQyxFQUFFLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxXQUFXLEVBQUUsWUFBWSxFQUFFLENBQUM7Z0JBQ3JFLGtDQUFrQztnQkFDbEMsYUFBYSxFQUFFLGlCQUFpQixDQUFDLElBQUk7Z0JBQ3JDLGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO2FBQ2hEOztzQkF5UUksUUFBUTs7c0JBQ1IsUUFBUTs7c0JBQ1IsUUFBUTs7c0JBR1IsUUFBUTs7c0JBQUksSUFBSTt3QkF0TVYsaUJBQWlCO2tCQUF6QixLQUFLO1lBSUYsUUFBUTtrQkFEWCxLQUFLO1lBWUYsT0FBTztrQkFEVixLQUFLO1lBZUYsV0FBVztrQkFEZCxLQUFLO1lBa0JGLEtBQUs7a0JBRFIsS0FBSztZQXVCRixRQUFRO2tCQURYLEtBQUs7WUFlRixXQUFXO2tCQURkLEtBQUs7WUFvQ0YsUUFBUTtrQkFEWCxLQUFLO1lBV3FCLGVBQWU7a0JBQXpDLEtBQUs7bUJBQUMsa0JBQWtCO1lBT3JCLFVBQVU7a0JBRGIsS0FBSztZQWNGLFFBQVE7a0JBRFgsS0FBSztZQTJCYSxNQUFNO2tCQUF4QixNQUFNO1lBT1ksV0FBVztrQkFBN0IsTUFBTTtZQVFQLEtBQUs7a0JBTEosZUFBZTttQkFBQyxlQUFlLEVBQUU7b0JBQ2hDLHVFQUF1RTtvQkFDdkUsOENBQThDO29CQUM5QyxXQUFXLEVBQUUsSUFBSTtpQkFDbEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBGb2N1c0tleU1hbmFnZXIgfSBmcm9tICdAYW5ndWxhci9jZGsvYTExeSc7XG5pbXBvcnQgeyBEaXJlY3Rpb25hbGl0eSB9IGZyb20gJ0Bhbmd1bGFyL2Nkay9iaWRpJztcbmltcG9ydCB7IEJvb2xlYW5JbnB1dCwgY29lcmNlQm9vbGVhblByb3BlcnR5IH0gZnJvbSAnQGFuZ3VsYXIvY2RrL2NvZXJjaW9uJztcbmltcG9ydCB7IFNlbGVjdGlvbk1vZGVsIH0gZnJvbSAnQGFuZ3VsYXIvY2RrL2NvbGxlY3Rpb25zJztcbmltcG9ydCB7XG4gIEFmdGVyQ29udGVudEluaXQsXG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxuICBDaGFuZ2VEZXRlY3RvclJlZixcbiAgQ29tcG9uZW50LFxuICBDb250ZW50Q2hpbGRyZW4sXG4gIERvQ2hlY2ssXG4gIEVsZW1lbnRSZWYsXG4gIEV2ZW50RW1pdHRlcixcbiAgSW5wdXQsXG4gIE9uRGVzdHJveSxcbiAgT25Jbml0LFxuICBPcHRpb25hbCxcbiAgT3V0cHV0LFxuICBRdWVyeUxpc3QsXG4gIFNlbGYsXG4gIFZpZXdFbmNhcHN1bGF0aW9uLFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbnRyb2xWYWx1ZUFjY2Vzc29yLCBGb3JtR3JvdXBEaXJlY3RpdmUsIE5nQ29udHJvbCwgTmdGb3JtIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHsgbWVyZ2UsIE9ic2VydmFibGUsIFN1YmplY3QsIFN1YnNjcmlwdGlvbiB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgc3RhcnRXaXRoLCB0YWtlVW50aWwgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQgeyBLZXkgfSBmcm9tICcuLi8uLi91dGlscyc7XG5pbXBvcnQgeyBDYW5VcGRhdGVFcnJvclN0YXRlLCBDYW5VcGRhdGVFcnJvclN0YXRlQ3RvciwgRXJyb3JTdGF0ZU1hdGNoZXIsIG1peGluRXJyb3JTdGF0ZSB9IGZyb20gJy4uL2NvbW1vbic7XG5pbXBvcnQgeyBOb3ZvRmllbGRDb250cm9sIH0gZnJvbSAnLi4vZmllbGQnO1xuaW1wb3J0IHsgTm92b0NoaXBFbGVtZW50LCBOb3ZvQ2hpcEV2ZW50LCBOb3ZvQ2hpcFNlbGVjdGlvbkNoYW5nZSB9IGZyb20gJy4vQ2hpcCc7XG5pbXBvcnQgeyBOb3ZvQ2hpcFRleHRDb250cm9sIH0gZnJvbSAnLi9DaGlwVGV4dENvbnRyb2wnO1xuXG4vLyBCb2lsZXJwbGF0ZSBmb3IgYXBwbHlpbmcgbWl4aW5zIHRvIE5vdm9DaGlwTGlzdC5cbi8qKiBAZG9jcy1wcml2YXRlICovXG5jbGFzcyBOb3ZvQ2hpcExpc3RCYXNlIHtcbiAgY29uc3RydWN0b3IoXG4gICAgcHVibGljIF9kZWZhdWx0RXJyb3JTdGF0ZU1hdGNoZXI6IEVycm9yU3RhdGVNYXRjaGVyLFxuICAgIHB1YmxpYyBfcGFyZW50Rm9ybTogTmdGb3JtLFxuICAgIHB1YmxpYyBfcGFyZW50Rm9ybUdyb3VwOiBGb3JtR3JvdXBEaXJlY3RpdmUsXG4gICAgLyoqIEBkb2NzLXByaXZhdGUgKi9cbiAgICBwdWJsaWMgbmdDb250cm9sOiBOZ0NvbnRyb2wsXG4gICkge31cbn1cbmNvbnN0IF9Ob3ZvQ2hpcExpc3RNaXhpbkJhc2U6IENhblVwZGF0ZUVycm9yU3RhdGVDdG9yICYgdHlwZW9mIE5vdm9DaGlwTGlzdEJhc2UgPSBtaXhpbkVycm9yU3RhdGUoTm92b0NoaXBMaXN0QmFzZSk7XG5cbi8vIEluY3JlYXNpbmcgaW50ZWdlciBmb3IgZ2VuZXJhdGluZyB1bmlxdWUgaWRzIGZvciBjaGlwLWxpc3QgY29tcG9uZW50cy5cbmxldCBuZXh0VW5pcXVlSWQgPSAwO1xuXG4vKiogQ2hhbmdlIGV2ZW50IG9iamVjdCB0aGF0IGlzIGVtaXR0ZWQgd2hlbiB0aGUgY2hpcCBsaXN0IHZhbHVlIGhhcyBjaGFuZ2VkLiAqL1xuZXhwb3J0IGNsYXNzIE5vdm9DaGlwTGlzdENoYW5nZSB7XG4gIGNvbnN0cnVjdG9yKFxuICAgIC8qKiBDaGlwIGxpc3QgdGhhdCBlbWl0dGVkIHRoZSBldmVudC4gKi9cbiAgICBwdWJsaWMgc291cmNlOiBOb3ZvQ2hpcExpc3QsXG4gICAgLyoqIFZhbHVlIG9mIHRoZSBjaGlwIGxpc3Qgd2hlbiB0aGUgZXZlbnQgd2FzIGVtaXR0ZWQuICovXG4gICAgcHVibGljIHZhbHVlOiBhbnksXG4gICkge31cbn1cblxuLyoqXG4gKiBBIG1hdGVyaWFsIGRlc2lnbiBjaGlwcyBjb21wb25lbnQgKG5hbWVkIENoaXBMaXN0IGZvciBpdHMgc2ltaWxhcml0eSB0byB0aGUgTGlzdCBjb21wb25lbnQpLlxuICovXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdub3ZvLWNoaXAtbGlzdCcsXG4gIHRlbXBsYXRlOiBgPGRpdiBjbGFzcz1cIm5vdm8tY2hpcC1saXN0LXdyYXBwZXJcIj48bmctY29udGVudD48L25nLWNvbnRlbnQ+PC9kaXY+YCxcbiAgZXhwb3J0QXM6ICdub3ZvQ2hpcExpc3QnLFxuICBob3N0OiB7XG4gICAgJ1thdHRyLnRhYmluZGV4XSc6ICdkaXNhYmxlZCA/IG51bGwgOiBfdGFiSW5kZXgnLFxuICAgICdbYXR0ci5hcmlhLWRlc2NyaWJlZGJ5XSc6ICdfYXJpYURlc2NyaWJlZGJ5IHx8IG51bGwnLFxuICAgICdbYXR0ci5hcmlhLXJlcXVpcmVkXSc6ICdyb2xlID8gcmVxdWlyZWQgOiBudWxsJyxcbiAgICAnW2F0dHIuYXJpYS1kaXNhYmxlZF0nOiAnZGlzYWJsZWQudG9TdHJpbmcoKScsXG4gICAgJ1thdHRyLmFyaWEtaW52YWxpZF0nOiAnZXJyb3JTdGF0ZScsXG4gICAgJ1thdHRyLmFyaWEtbXVsdGlzZWxlY3RhYmxlXSc6ICdtdWx0aXBsZScsXG4gICAgJ1thdHRyLnJvbGVdJzogJ3JvbGUnLFxuICAgICdbY2xhc3Mubm92by1jaGlwLWxpc3Qtc3RhY2tlZF0nOiAnc3RhY2tlZCcsXG4gICAgJ1tjbGFzcy5ub3ZvLWNoaXAtbGlzdC1mb2N1c2VkXSc6ICdmb2N1c2VkJyxcbiAgICAnW2NsYXNzLm5vdm8tY2hpcC1saXN0LWRpc2FibGVkXSc6ICdkaXNhYmxlZCcsXG4gICAgJ1tjbGFzcy5ub3ZvLWNoaXAtbGlzdC1pbnZhbGlkXSc6ICdlcnJvclN0YXRlJyxcbiAgICAnW2NsYXNzLm5vdm8tY2hpcC1saXN0LXJlcXVpcmVkXSc6ICdyZXF1aXJlZCcsXG4gICAgJ1thdHRyLmFyaWEtb3JpZW50YXRpb25dJzogJ2FyaWFPcmllbnRhdGlvbicsXG4gICAgY2xhc3M6ICdub3ZvLWNoaXAtbGlzdCcsXG4gICAgJyhmb2N1cyknOiAnZm9jdXMoKScsXG4gICAgJyhibHVyKSc6ICdfYmx1cigpJyxcbiAgICAnKGtleWRvd24pJzogJ19rZXlkb3duKCRldmVudCknLFxuICAgICdbaWRdJzogJ191aWQnLFxuICB9LFxuICBwcm92aWRlcnM6IFt7IHByb3ZpZGU6IE5vdm9GaWVsZENvbnRyb2wsIHVzZUV4aXN0aW5nOiBOb3ZvQ2hpcExpc3QgfV0sXG4gIC8vIHN0eWxlVXJsczogWycuL0NoaXBMaXN0LnNjc3MnXSxcbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG59KVxuZXhwb3J0IGNsYXNzIE5vdm9DaGlwTGlzdFxuICBleHRlbmRzIF9Ob3ZvQ2hpcExpc3RNaXhpbkJhc2VcbiAgaW1wbGVtZW50cyBOb3ZvRmllbGRDb250cm9sPGFueT4sIENvbnRyb2xWYWx1ZUFjY2Vzc29yLCBBZnRlckNvbnRlbnRJbml0LCBEb0NoZWNrLCBPbkluaXQsIE9uRGVzdHJveSwgQ2FuVXBkYXRlRXJyb3JTdGF0ZSB7XG4gIC8qKlxuICAgKiBJbXBsZW1lbnRlZCBhcyBwYXJ0IG9mIE5vdm9GaWVsZENvbnRyb2wuXG4gICAqIEBkb2NzLXByaXZhdGVcbiAgICovXG4gIHJlYWRvbmx5IGNvbnRyb2xUeXBlOiBzdHJpbmcgPSAnbm92by1jaGlwLWxpc3QnO1xuXG4gIC8qKlxuICAgKiBXaGVuIGEgY2hpcCBpcyBkZXN0cm95ZWQsIHdlIHN0b3JlIHRoZSBpbmRleCBvZiB0aGUgZGVzdHJveWVkIGNoaXAgdW50aWwgdGhlIGNoaXBzXG4gICAqIHF1ZXJ5IGxpc3Qgbm90aWZpZXMgYWJvdXQgdGhlIHVwZGF0ZS4gVGhpcyBpcyBuZWNlc3NhcnkgYmVjYXVzZSB3ZSBjYW5ub3QgZGV0ZXJtaW5lIGFuXG4gICAqIGFwcHJvcHJpYXRlIGNoaXAgdGhhdCBzaG91bGQgcmVjZWl2ZSBmb2N1cyB1bnRpbCB0aGUgYXJyYXkgb2YgY2hpcHMgdXBkYXRlZCBjb21wbGV0ZWx5LlxuICAgKi9cbiAgcHJpdmF0ZSBfbGFzdERlc3Ryb3llZENoaXBJbmRleDogbnVtYmVyIHwgbnVsbCA9IG51bGw7XG5cbiAgLyoqIFN1YmplY3QgdGhhdCBlbWl0cyB3aGVuIHRoZSBjb21wb25lbnQgaGFzIGJlZW4gZGVzdHJveWVkLiAqL1xuICBwcml2YXRlIF9kZXN0cm95ZWQgPSBuZXcgU3ViamVjdDx2b2lkPigpO1xuXG4gIC8qKiBTdWJzY3JpcHRpb24gdG8gZm9jdXMgY2hhbmdlcyBpbiB0aGUgY2hpcHMuICovXG4gIHByaXZhdGUgX2NoaXBGb2N1c1N1YnNjcmlwdGlvbjogU3Vic2NyaXB0aW9uIHwgbnVsbDtcblxuICAvKiogU3Vic2NyaXB0aW9uIHRvIGJsdXIgY2hhbmdlcyBpbiB0aGUgY2hpcHMuICovXG4gIHByaXZhdGUgX2NoaXBCbHVyU3Vic2NyaXB0aW9uOiBTdWJzY3JpcHRpb24gfCBudWxsO1xuXG4gIC8qKiBTdWJzY3JpcHRpb24gdG8gc2VsZWN0aW9uIGNoYW5nZXMgaW4gY2hpcHMuICovXG4gIHByaXZhdGUgX2NoaXBTZWxlY3Rpb25TdWJzY3JpcHRpb246IFN1YnNjcmlwdGlvbiB8IG51bGw7XG5cbiAgLyoqIFN1YnNjcmlwdGlvbiB0byByZW1vdmUgY2hhbmdlcyBpbiBjaGlwcy4gKi9cbiAgcHJpdmF0ZSBfY2hpcFJlbW92ZVN1YnNjcmlwdGlvbjogU3Vic2NyaXB0aW9uIHwgbnVsbDtcblxuICAvKiogVGhlIGNoaXAgaW5wdXQgdG8gYWRkIG1vcmUgY2hpcHMgKi9cbiAgcHJvdGVjdGVkIF9jaGlwSW5wdXQ6IE5vdm9DaGlwVGV4dENvbnRyb2w7XG5cbiAgLyoqIFVpZCBvZiB0aGUgY2hpcCBsaXN0ICovXG4gIF91aWQ6IHN0cmluZyA9IGBub3ZvLWNoaXAtbGlzdC0ke25leHRVbmlxdWVJZCsrfWA7XG5cbiAgLyoqIFRoZSBhcmlhLWRlc2NyaWJlZGJ5IGF0dHJpYnV0ZSBvbiB0aGUgY2hpcCBsaXN0IGZvciBpbXByb3ZlZCBhMTF5LiAqL1xuICBfYXJpYURlc2NyaWJlZGJ5OiBzdHJpbmc7XG5cbiAgLyoqIFRhYiBpbmRleCBmb3IgdGhlIGNoaXAgbGlzdC4gKi9cbiAgX3RhYkluZGV4ID0gMDtcblxuICAvKipcbiAgICogVXNlciBkZWZpbmVkIHRhYiBpbmRleC5cbiAgICogV2hlbiBpdCBpcyBub3QgbnVsbCwgdXNlIHVzZXIgZGVmaW5lZCB0YWIgaW5kZXguIE90aGVyd2lzZSB1c2UgX3RhYkluZGV4XG4gICAqL1xuICBfdXNlclRhYkluZGV4OiBudW1iZXIgfCBudWxsID0gbnVsbDtcblxuICAvKiogVGhlIEZvY3VzS2V5TWFuYWdlciB3aGljaCBoYW5kbGVzIGZvY3VzLiAqL1xuICBfa2V5TWFuYWdlcjogRm9jdXNLZXlNYW5hZ2VyPE5vdm9DaGlwRWxlbWVudD47XG5cbiAgLyoqIEZ1bmN0aW9uIHdoZW4gdG91Y2hlZCAqL1xuICBfb25Ub3VjaGVkID0gKCkgPT4ge307XG5cbiAgLyoqIEZ1bmN0aW9uIHdoZW4gY2hhbmdlZCAqL1xuICBfb25DaGFuZ2U6ICh2YWx1ZTogYW55KSA9PiB2b2lkID0gKCkgPT4ge307XG5cbiAgX3NlbGVjdGlvbk1vZGVsOiBTZWxlY3Rpb25Nb2RlbDxOb3ZvQ2hpcEVsZW1lbnQ+O1xuXG4gIC8qKiBUaGUgYXJyYXkgb2Ygc2VsZWN0ZWQgY2hpcHMgaW5zaWRlIGNoaXAgbGlzdC4gKi9cbiAgZ2V0IHNlbGVjdGVkKCk6IE5vdm9DaGlwRWxlbWVudFtdIHwgTm92b0NoaXBFbGVtZW50IHtcbiAgICByZXR1cm4gdGhpcy5tdWx0aXBsZSA/IHRoaXMuX3NlbGVjdGlvbk1vZGVsLnNlbGVjdGVkIDogdGhpcy5fc2VsZWN0aW9uTW9kZWwuc2VsZWN0ZWRbMF07XG4gIH1cblxuICAvKiogVGhlIEFSSUEgcm9sZSBhcHBsaWVkIHRvIHRoZSBjaGlwIGxpc3QuICovXG4gIGdldCByb2xlKCk6IHN0cmluZyB8IG51bGwge1xuICAgIHJldHVybiB0aGlzLmVtcHR5ID8gbnVsbCA6ICdsaXN0Ym94JztcbiAgfVxuXG4gIC8qKiBBbiBvYmplY3QgdXNlZCB0byBjb250cm9sIHdoZW4gZXJyb3IgbWVzc2FnZXMgYXJlIHNob3duLiAqL1xuICBASW5wdXQoKSBlcnJvclN0YXRlTWF0Y2hlcjogRXJyb3JTdGF0ZU1hdGNoZXI7XG5cbiAgLyoqIFdoZXRoZXIgdGhlIHVzZXIgc2hvdWxkIGJlIGFsbG93ZWQgdG8gc2VsZWN0IG11bHRpcGxlIGNoaXBzLiAqL1xuICBASW5wdXQoKVxuICBnZXQgbXVsdGlwbGUoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuX211bHRpcGxlO1xuICB9XG4gIHNldCBtdWx0aXBsZSh2YWx1ZTogYm9vbGVhbikge1xuICAgIHRoaXMuX211bHRpcGxlID0gY29lcmNlQm9vbGVhblByb3BlcnR5KHZhbHVlKTtcbiAgICB0aGlzLl9zeW5jQ2hpcHNTdGF0ZSgpO1xuICB9XG4gIHByaXZhdGUgX211bHRpcGxlOiBib29sZWFuID0gZmFsc2U7XG5cbiAgLyoqIFdoZXRoZXIgdGhlIGNoaXBzIHNob3VsZCBhcHBlYXIgc3RhY2tlZCBpbnN0ZWFkIG9mIGEgcm93LiAqL1xuICBASW5wdXQoKVxuICBnZXQgc3RhY2tlZCgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5fc3RhY2tlZDtcbiAgfVxuICBzZXQgc3RhY2tlZCh2YWx1ZTogYm9vbGVhbikge1xuICAgIHRoaXMuX3N0YWNrZWQgPSBjb2VyY2VCb29sZWFuUHJvcGVydHkodmFsdWUpO1xuICB9XG4gIHByaXZhdGUgX3N0YWNrZWQ6IGJvb2xlYW4gPSBmYWxzZTtcblxuICAvKipcbiAgICogQSBmdW5jdGlvbiB0byBjb21wYXJlIHRoZSBvcHRpb24gdmFsdWVzIHdpdGggdGhlIHNlbGVjdGVkIHZhbHVlcy4gVGhlIGZpcnN0IGFyZ3VtZW50XG4gICAqIGlzIGEgdmFsdWUgZnJvbSBhbiBvcHRpb24uIFRoZSBzZWNvbmQgaXMgYSB2YWx1ZSBmcm9tIHRoZSBzZWxlY3Rpb24uIEEgYm9vbGVhblxuICAgKiBzaG91bGQgYmUgcmV0dXJuZWQuXG4gICAqL1xuICBASW5wdXQoKVxuICBnZXQgY29tcGFyZVdpdGgoKTogKG8xOiBhbnksIG8yOiBhbnkpID0+IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLl9jb21wYXJlV2l0aDtcbiAgfVxuICBzZXQgY29tcGFyZVdpdGgoZm46IChvMTogYW55LCBvMjogYW55KSA9PiBib29sZWFuKSB7XG4gICAgdGhpcy5fY29tcGFyZVdpdGggPSBmbjtcbiAgICBpZiAodGhpcy5fc2VsZWN0aW9uTW9kZWwpIHtcbiAgICAgIC8vIEEgZGlmZmVyZW50IGNvbXBhcmF0b3IgbWVhbnMgdGhlIHNlbGVjdGlvbiBjb3VsZCBjaGFuZ2UuXG4gICAgICB0aGlzLl9pbml0aWFsaXplU2VsZWN0aW9uKCk7XG4gICAgfVxuICB9XG4gIHByaXZhdGUgX2NvbXBhcmVXaXRoID0gKG8xOiBhbnksIG8yOiBhbnkpID0+IG8xID09PSBvMjtcblxuICAvKipcbiAgICogSW1wbGVtZW50ZWQgYXMgcGFydCBvZiBOb3ZvRmllbGRDb250cm9sLlxuICAgKiBAZG9jcy1wcml2YXRlXG4gICAqL1xuICBASW5wdXQoKVxuICBnZXQgdmFsdWUoKTogYW55IHtcbiAgICByZXR1cm4gdGhpcy5fdmFsdWU7XG4gIH1cbiAgc2V0IHZhbHVlKHZhbHVlOiBhbnkpIHtcbiAgICB0aGlzLndyaXRlVmFsdWUodmFsdWUpO1xuICAgIHRoaXMuX3ZhbHVlID0gdmFsdWU7XG4gIH1cbiAgcHJvdGVjdGVkIF92YWx1ZTogYW55O1xuXG4gIC8qKlxuICAgKiBJbXBsZW1lbnRlZCBhcyBwYXJ0IG9mIE5vdm9GaWVsZENvbnRyb2wuXG4gICAqIEBkb2NzLXByaXZhdGVcbiAgICovXG4gIGdldCBpZCgpOiBzdHJpbmcge1xuICAgIHJldHVybiB0aGlzLl9jaGlwSW5wdXQgPyB0aGlzLl9jaGlwSW5wdXQuaWQgOiB0aGlzLl91aWQ7XG4gIH1cblxuICAvKipcbiAgICogSW1wbGVtZW50ZWQgYXMgcGFydCBvZiBOb3ZvRmllbGRDb250cm9sLlxuICAgKiBAZG9jcy1wcml2YXRlXG4gICAqL1xuICBASW5wdXQoKVxuICBnZXQgcmVxdWlyZWQoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuX3JlcXVpcmVkO1xuICB9XG4gIHNldCByZXF1aXJlZCh2YWx1ZTogYm9vbGVhbikge1xuICAgIHRoaXMuX3JlcXVpcmVkID0gY29lcmNlQm9vbGVhblByb3BlcnR5KHZhbHVlKTtcbiAgICB0aGlzLnN0YXRlQ2hhbmdlcy5uZXh0KCk7XG4gIH1cbiAgcHJvdGVjdGVkIF9yZXF1aXJlZDogYm9vbGVhbiA9IGZhbHNlO1xuXG4gIC8qKlxuICAgKiBJbXBsZW1lbnRlZCBhcyBwYXJ0IG9mIE5vdm9GaWVsZENvbnRyb2wuXG4gICAqIEBkb2NzLXByaXZhdGVcbiAgICovXG4gIEBJbnB1dCgpXG4gIGdldCBwbGFjZWhvbGRlcigpOiBzdHJpbmcge1xuICAgIHJldHVybiB0aGlzLl9jaGlwSW5wdXQgPyB0aGlzLl9jaGlwSW5wdXQucGxhY2Vob2xkZXIgOiB0aGlzLl9wbGFjZWhvbGRlcjtcbiAgfVxuICBzZXQgcGxhY2Vob2xkZXIodmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX3BsYWNlaG9sZGVyID0gdmFsdWU7XG4gICAgdGhpcy5zdGF0ZUNoYW5nZXMubmV4dCgpO1xuICB9XG4gIHByb3RlY3RlZCBfcGxhY2Vob2xkZXI6IHN0cmluZztcblxuICAvKiogV2hldGhlciBhbnkgY2hpcHMgb3IgdGhlIG1hdENoaXBJbnB1dCBpbnNpZGUgb2YgdGhpcyBjaGlwLWxpc3QgaGFzIGZvY3VzLiAqL1xuICBnZXQgZm9jdXNlZCgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gKHRoaXMuX2NoaXBJbnB1dCAmJiB0aGlzLl9jaGlwSW5wdXQuZm9jdXNlZCkgfHwgdGhpcy5faGFzRm9jdXNlZENoaXAoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBJbXBsZW1lbnRlZCBhcyBwYXJ0IG9mIE5vdm9GaWVsZENvbnRyb2wuXG4gICAqIEBkb2NzLXByaXZhdGVcbiAgICovXG4gIGdldCBlbXB0eSgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gKCF0aGlzLl9jaGlwSW5wdXQgfHwgdGhpcy5fY2hpcElucHV0LmVtcHR5KSAmJiAoIXRoaXMuY2hpcHMgfHwgdGhpcy5jaGlwcy5sZW5ndGggPT09IDApO1xuICB9XG5cbiAgLyoqXG4gICAqIEltcGxlbWVudGVkIGFzIHBhcnQgb2YgTm92b0ZpZWxkQ29udHJvbC5cbiAgICogQGRvY3MtcHJpdmF0ZVxuICAgKi9cbiAgZ2V0IHNob3VsZExhYmVsRmxvYXQoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuICF0aGlzLmVtcHR5IHx8IHRoaXMuZm9jdXNlZDtcbiAgfVxuXG4gIC8qKlxuICAgKiBJbXBsZW1lbnRlZCBhcyBwYXJ0IG9mIE5vdm9GaWVsZENvbnRyb2wuXG4gICAqIEBkb2NzLXByaXZhdGVcbiAgICovXG4gIEBJbnB1dCgpXG4gIGdldCBkaXNhYmxlZCgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5uZ0NvbnRyb2wgPyAhIXRoaXMubmdDb250cm9sLmRpc2FibGVkIDogdGhpcy5fZGlzYWJsZWQ7XG4gIH1cbiAgc2V0IGRpc2FibGVkKHZhbHVlOiBib29sZWFuKSB7XG4gICAgdGhpcy5fZGlzYWJsZWQgPSBjb2VyY2VCb29sZWFuUHJvcGVydHkodmFsdWUpO1xuICAgIHRoaXMuX3N5bmNDaGlwc1N0YXRlKCk7XG4gIH1cbiAgcHJvdGVjdGVkIF9kaXNhYmxlZDogYm9vbGVhbiA9IGZhbHNlO1xuXG4gIC8qKiBPcmllbnRhdGlvbiBvZiB0aGUgY2hpcCBsaXN0LiAqL1xuICBASW5wdXQoJ2FyaWEtb3JpZW50YXRpb24nKSBhcmlhT3JpZW50YXRpb246ICdob3Jpem9udGFsJyB8ICd2ZXJ0aWNhbCcgPSAnaG9yaXpvbnRhbCc7XG5cbiAgLyoqXG4gICAqIFdoZXRoZXIgb3Igbm90IHRoaXMgY2hpcCBsaXN0IGlzIHNlbGVjdGFibGUuIFdoZW4gYSBjaGlwIGxpc3QgaXMgbm90IHNlbGVjdGFibGUsXG4gICAqIHRoZSBzZWxlY3RlZCBzdGF0ZXMgZm9yIGFsbCB0aGUgY2hpcHMgaW5zaWRlIHRoZSBjaGlwIGxpc3QgYXJlIGFsd2F5cyBpZ25vcmVkLlxuICAgKi9cbiAgQElucHV0KClcbiAgZ2V0IHNlbGVjdGFibGUoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuX3NlbGVjdGFibGU7XG4gIH1cbiAgc2V0IHNlbGVjdGFibGUodmFsdWU6IGJvb2xlYW4pIHtcbiAgICB0aGlzLl9zZWxlY3RhYmxlID0gY29lcmNlQm9vbGVhblByb3BlcnR5KHZhbHVlKTtcblxuICAgIGlmICh0aGlzLmNoaXBzKSB7XG4gICAgICB0aGlzLmNoaXBzLmZvckVhY2goKGNoaXApID0+IChjaGlwLmNoaXBMaXN0U2VsZWN0YWJsZSA9IHRoaXMuX3NlbGVjdGFibGUpKTtcbiAgICB9XG4gIH1cbiAgcHJvdGVjdGVkIF9zZWxlY3RhYmxlOiBib29sZWFuID0gdHJ1ZTtcblxuICBASW5wdXQoKVxuICBzZXQgdGFiSW5kZXgodmFsdWU6IG51bWJlcikge1xuICAgIHRoaXMuX3VzZXJUYWJJbmRleCA9IHZhbHVlO1xuICAgIHRoaXMuX3RhYkluZGV4ID0gdmFsdWU7XG4gIH1cblxuICAvKiogQ29tYmluZWQgc3RyZWFtIG9mIGFsbCBvZiB0aGUgY2hpbGQgY2hpcHMnIHNlbGVjdGlvbiBjaGFuZ2UgZXZlbnRzLiAqL1xuICBnZXQgY2hpcFNlbGVjdGlvbkNoYW5nZXMoKTogT2JzZXJ2YWJsZTxOb3ZvQ2hpcFNlbGVjdGlvbkNoYW5nZT4ge1xuICAgIHJldHVybiBtZXJnZSguLi50aGlzLmNoaXBzLm1hcCgoY2hpcCkgPT4gY2hpcC5zZWxlY3Rpb25DaGFuZ2UpKTtcbiAgfVxuXG4gIC8qKiBDb21iaW5lZCBzdHJlYW0gb2YgYWxsIG9mIHRoZSBjaGlsZCBjaGlwcycgZm9jdXMgY2hhbmdlIGV2ZW50cy4gKi9cbiAgZ2V0IGNoaXBGb2N1c0NoYW5nZXMoKTogT2JzZXJ2YWJsZTxOb3ZvQ2hpcEV2ZW50PiB7XG4gICAgcmV0dXJuIG1lcmdlKC4uLnRoaXMuY2hpcHMubWFwKChjaGlwKSA9PiBjaGlwLl9vbkZvY3VzKSk7XG4gIH1cblxuICAvKiogQ29tYmluZWQgc3RyZWFtIG9mIGFsbCBvZiB0aGUgY2hpbGQgY2hpcHMnIGJsdXIgY2hhbmdlIGV2ZW50cy4gKi9cbiAgZ2V0IGNoaXBCbHVyQ2hhbmdlcygpOiBPYnNlcnZhYmxlPE5vdm9DaGlwRXZlbnQ+IHtcbiAgICByZXR1cm4gbWVyZ2UoLi4udGhpcy5jaGlwcy5tYXAoKGNoaXApID0+IGNoaXAuX29uQmx1cikpO1xuICB9XG5cbiAgLyoqIENvbWJpbmVkIHN0cmVhbSBvZiBhbGwgb2YgdGhlIGNoaWxkIGNoaXBzJyByZW1vdmUgY2hhbmdlIGV2ZW50cy4gKi9cbiAgZ2V0IGNoaXBSZW1vdmVDaGFuZ2VzKCk6IE9ic2VydmFibGU8Tm92b0NoaXBFdmVudD4ge1xuICAgIHJldHVybiBtZXJnZSguLi50aGlzLmNoaXBzLm1hcCgoY2hpcCkgPT4gY2hpcC5kZXN0cm95ZWQpKTtcbiAgfVxuXG4gIC8qKiBFdmVudCBlbWl0dGVkIHdoZW4gdGhlIHNlbGVjdGVkIGNoaXAgbGlzdCB2YWx1ZSBoYXMgYmVlbiBjaGFuZ2VkIGJ5IHRoZSB1c2VyLiAqL1xuICBAT3V0cHV0KCkgcmVhZG9ubHkgY2hhbmdlOiBFdmVudEVtaXR0ZXI8Tm92b0NoaXBMaXN0Q2hhbmdlPiA9IG5ldyBFdmVudEVtaXR0ZXI8Tm92b0NoaXBMaXN0Q2hhbmdlPigpO1xuXG4gIC8qKlxuICAgKiBFdmVudCB0aGF0IGVtaXRzIHdoZW5ldmVyIHRoZSByYXcgdmFsdWUgb2YgdGhlIGNoaXAtbGlzdCBjaGFuZ2VzLiBUaGlzIGlzIGhlcmUgcHJpbWFyaWx5XG4gICAqIHRvIGZhY2lsaXRhdGUgdGhlIHR3by13YXkgYmluZGluZyBmb3IgdGhlIGB2YWx1ZWAgaW5wdXQuXG4gICAqIEBkb2NzLXByaXZhdGVcbiAgICovXG4gIEBPdXRwdXQoKSByZWFkb25seSB2YWx1ZUNoYW5nZTogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcblxuICAvKiogVGhlIGNoaXAgY29tcG9uZW50cyBjb250YWluZWQgd2l0aGluIHRoaXMgY2hpcCBsaXN0LiAqL1xuICBAQ29udGVudENoaWxkcmVuKE5vdm9DaGlwRWxlbWVudCwge1xuICAgIC8vIFdlIG5lZWQgdG8gdXNlIGBkZXNjZW5kYW50czogdHJ1ZWAsIGJlY2F1c2UgSXZ5IHdpbGwgbm8gbG9uZ2VyIG1hdGNoXG4gICAgLy8gaW5kaXJlY3QgZGVzY2VuZGFudHMgaWYgaXQncyBsZWZ0IGFzIGZhbHNlLlxuICAgIGRlc2NlbmRhbnRzOiB0cnVlLFxuICB9KVxuICBjaGlwczogUXVlcnlMaXN0PE5vdm9DaGlwRWxlbWVudD47XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJvdGVjdGVkIF9lbGVtZW50UmVmOiBFbGVtZW50UmVmPEhUTUxFbGVtZW50PixcbiAgICBwcml2YXRlIF9jaGFuZ2VEZXRlY3RvclJlZjogQ2hhbmdlRGV0ZWN0b3JSZWYsXG4gICAgQE9wdGlvbmFsKCkgcHJpdmF0ZSBfZGlyOiBEaXJlY3Rpb25hbGl0eSxcbiAgICBAT3B0aW9uYWwoKSBfcGFyZW50Rm9ybTogTmdGb3JtLFxuICAgIEBPcHRpb25hbCgpIF9wYXJlbnRGb3JtR3JvdXA6IEZvcm1Hcm91cERpcmVjdGl2ZSxcbiAgICBfZGVmYXVsdEVycm9yU3RhdGVNYXRjaGVyOiBFcnJvclN0YXRlTWF0Y2hlcixcbiAgICAvKiogQGRvY3MtcHJpdmF0ZSAqL1xuICAgIEBPcHRpb25hbCgpIEBTZWxmKCkgcHVibGljIG5nQ29udHJvbDogTmdDb250cm9sLFxuICApIHtcbiAgICBzdXBlcihfZGVmYXVsdEVycm9yU3RhdGVNYXRjaGVyLCBfcGFyZW50Rm9ybSwgX3BhcmVudEZvcm1Hcm91cCwgbmdDb250cm9sKTtcbiAgICBpZiAodGhpcy5uZ0NvbnRyb2wpIHtcbiAgICAgIHRoaXMubmdDb250cm9sLnZhbHVlQWNjZXNzb3IgPSB0aGlzO1xuICAgIH1cbiAgfVxuXG4gIG5nQWZ0ZXJDb250ZW50SW5pdCgpIHtcbiAgICB0aGlzLl9rZXlNYW5hZ2VyID0gbmV3IEZvY3VzS2V5TWFuYWdlcjxOb3ZvQ2hpcEVsZW1lbnQ+KHRoaXMuY2hpcHMpXG4gICAgICAud2l0aFdyYXAoKVxuICAgICAgLndpdGhWZXJ0aWNhbE9yaWVudGF0aW9uKClcbiAgICAgIC53aXRoSG9tZUFuZEVuZCgpXG4gICAgICAud2l0aEhvcml6b250YWxPcmllbnRhdGlvbih0aGlzLl9kaXIgPyB0aGlzLl9kaXIudmFsdWUgOiAnbHRyJyk7XG5cbiAgICBpZiAodGhpcy5fZGlyKSB7XG4gICAgICB0aGlzLl9kaXIuY2hhbmdlLnBpcGUodGFrZVVudGlsKHRoaXMuX2Rlc3Ryb3llZCkpLnN1YnNjcmliZSgoZGlyKSA9PiB0aGlzLl9rZXlNYW5hZ2VyLndpdGhIb3Jpem9udGFsT3JpZW50YXRpb24oZGlyKSk7XG4gICAgfVxuXG4gICAgdGhpcy5fa2V5TWFuYWdlci50YWJPdXQucGlwZSh0YWtlVW50aWwodGhpcy5fZGVzdHJveWVkKSkuc3Vic2NyaWJlKCgpID0+IHtcbiAgICAgIHRoaXMuX2FsbG93Rm9jdXNFc2NhcGUoKTtcbiAgICB9KTtcblxuICAgIC8vIFdoZW4gdGhlIGxpc3QgY2hhbmdlcywgcmUtc3Vic2NyaWJlXG4gICAgdGhpcy5jaGlwcy5jaGFuZ2VzLnBpcGUoc3RhcnRXaXRoKG51bGwpLCB0YWtlVW50aWwodGhpcy5fZGVzdHJveWVkKSkuc3Vic2NyaWJlKCgpID0+IHtcbiAgICAgIGlmICh0aGlzLmRpc2FibGVkKSB7XG4gICAgICAgIC8vIFNpbmNlIHRoaXMgaGFwcGVucyBhZnRlciB0aGUgY29udGVudCBoYXMgYmVlblxuICAgICAgICAvLyBjaGVja2VkLCB3ZSBuZWVkIHRvIGRlZmVyIGl0IHRvIHRoZSBuZXh0IHRpY2suXG4gICAgICAgIFByb21pc2UucmVzb2x2ZSgpLnRoZW4oKCkgPT4ge1xuICAgICAgICAgIHRoaXMuX3N5bmNDaGlwc1N0YXRlKCk7XG4gICAgICAgIH0pO1xuICAgICAgfVxuXG4gICAgICB0aGlzLl9yZXNldENoaXBzKCk7XG5cbiAgICAgIC8vIFJlc2V0IGNoaXBzIHNlbGVjdGVkL2Rlc2VsZWN0ZWQgc3RhdHVzXG4gICAgICB0aGlzLl9pbml0aWFsaXplU2VsZWN0aW9uKCk7XG5cbiAgICAgIC8vIENoZWNrIHRvIHNlZSBpZiB3ZSBuZWVkIHRvIHVwZGF0ZSBvdXIgdGFiIGluZGV4XG4gICAgICB0aGlzLl91cGRhdGVUYWJJbmRleCgpO1xuXG4gICAgICAvLyBDaGVjayB0byBzZWUgaWYgd2UgaGF2ZSBhIGRlc3Ryb3llZCBjaGlwIGFuZCBuZWVkIHRvIHJlZm9jdXNcbiAgICAgIHRoaXMuX3VwZGF0ZUZvY3VzRm9yRGVzdHJveWVkQ2hpcHMoKTtcblxuICAgICAgdGhpcy5zdGF0ZUNoYW5nZXMubmV4dCgpO1xuICAgIH0pO1xuICB9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgdGhpcy5fc2VsZWN0aW9uTW9kZWwgPSBuZXcgU2VsZWN0aW9uTW9kZWw8Tm92b0NoaXBFbGVtZW50Pih0aGlzLm11bHRpcGxlLCB1bmRlZmluZWQsIGZhbHNlKTtcbiAgICB0aGlzLnN0YXRlQ2hhbmdlcy5uZXh0KCk7XG4gIH1cblxuICBuZ0RvQ2hlY2soKSB7XG4gICAgaWYgKHRoaXMubmdDb250cm9sKSB7XG4gICAgICAvLyBXZSBuZWVkIHRvIHJlLWV2YWx1YXRlIHRoaXMgb24gZXZlcnkgY2hhbmdlIGRldGVjdGlvbiBjeWNsZSwgYmVjYXVzZSB0aGVyZSBhcmUgc29tZVxuICAgICAgLy8gZXJyb3IgdHJpZ2dlcnMgdGhhdCB3ZSBjYW4ndCBzdWJzY3JpYmUgdG8gKGUuZy4gcGFyZW50IGZvcm0gc3VibWlzc2lvbnMpLiBUaGlzIG1lYW5zXG4gICAgICAvLyB0aGF0IHdoYXRldmVyIGxvZ2ljIGlzIGluIGhlcmUgaGFzIHRvIGJlIHN1cGVyIGxlYW4gb3Igd2UgcmlzayBkZXN0cm95aW5nIHRoZSBwZXJmb3JtYW5jZS5cbiAgICAgIHRoaXMudXBkYXRlRXJyb3JTdGF0ZSgpO1xuXG4gICAgICBpZiAodGhpcy5uZ0NvbnRyb2wuZGlzYWJsZWQgIT09IHRoaXMuX2Rpc2FibGVkKSB7XG4gICAgICAgIHRoaXMuZGlzYWJsZWQgPSAhIXRoaXMubmdDb250cm9sLmRpc2FibGVkO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIG5nT25EZXN0cm95KCkge1xuICAgIHRoaXMuX2Rlc3Ryb3llZC5uZXh0KCk7XG4gICAgdGhpcy5fZGVzdHJveWVkLmNvbXBsZXRlKCk7XG4gICAgdGhpcy5zdGF0ZUNoYW5nZXMuY29tcGxldGUoKTtcblxuICAgIHRoaXMuX2Ryb3BTdWJzY3JpcHRpb25zKCk7XG4gIH1cblxuICAvKiogQXNzb2NpYXRlcyBhbiBIVE1MIGlucHV0IGVsZW1lbnQgd2l0aCB0aGlzIGNoaXAgbGlzdC4gKi9cbiAgcmVnaXN0ZXJJbnB1dChpbnB1dEVsZW1lbnQ6IE5vdm9DaGlwVGV4dENvbnRyb2wpOiB2b2lkIHtcbiAgICB0aGlzLl9jaGlwSW5wdXQgPSBpbnB1dEVsZW1lbnQ7XG5cbiAgICAvLyBXZSB1c2UgdGhpcyBhdHRyaWJ1dGUgdG8gbWF0Y2ggdGhlIGNoaXAgbGlzdCB0byBpdHMgaW5wdXQgaW4gdGVzdCBoYXJuZXNzZXMuXG4gICAgLy8gU2V0IHRoZSBhdHRyaWJ1dGUgZGlyZWN0bHkgaGVyZSB0byBhdm9pZCBcImNoYW5nZWQgYWZ0ZXIgY2hlY2tlZFwiIGVycm9ycy5cbiAgICB0aGlzLl9lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQuc2V0QXR0cmlidXRlKCdkYXRhLW5vdm8tY2hpcC1pbnB1dCcsIGlucHV0RWxlbWVudC5pZCk7XG4gIH1cblxuICAvKipcbiAgICogSW1wbGVtZW50ZWQgYXMgcGFydCBvZiBOb3ZvRmllbGRDb250cm9sLlxuICAgKiBAZG9jcy1wcml2YXRlXG4gICAqL1xuICBzZXREZXNjcmliZWRCeUlkcyhpZHM6IHN0cmluZ1tdKSB7XG4gICAgdGhpcy5fYXJpYURlc2NyaWJlZGJ5ID0gaWRzLmpvaW4oJyAnKTtcbiAgfVxuXG4gIC8vIEltcGxlbWVudGVkIGFzIHBhcnQgb2YgQ29udHJvbFZhbHVlQWNjZXNzb3IuXG4gIHdyaXRlVmFsdWUodmFsdWU6IGFueSk6IHZvaWQge1xuICAgIGlmICh0aGlzLmNoaXBzKSB7XG4gICAgICB0aGlzLl9zZXRTZWxlY3Rpb25CeVZhbHVlKHZhbHVlLCBmYWxzZSk7XG4gICAgfVxuICB9XG5cbiAgLy8gSW1wbGVtZW50ZWQgYXMgcGFydCBvZiBDb250cm9sVmFsdWVBY2Nlc3Nvci5cbiAgcmVnaXN0ZXJPbkNoYW5nZShmbjogKHZhbHVlOiBhbnkpID0+IHZvaWQpOiB2b2lkIHtcbiAgICB0aGlzLl9vbkNoYW5nZSA9IGZuO1xuICB9XG5cbiAgLy8gSW1wbGVtZW50ZWQgYXMgcGFydCBvZiBDb250cm9sVmFsdWVBY2Nlc3Nvci5cbiAgcmVnaXN0ZXJPblRvdWNoZWQoZm46ICgpID0+IHZvaWQpOiB2b2lkIHtcbiAgICB0aGlzLl9vblRvdWNoZWQgPSBmbjtcbiAgfVxuXG4gIC8vIEltcGxlbWVudGVkIGFzIHBhcnQgb2YgQ29udHJvbFZhbHVlQWNjZXNzb3IuXG4gIHNldERpc2FibGVkU3RhdGUoaXNEaXNhYmxlZDogYm9vbGVhbik6IHZvaWQge1xuICAgIHRoaXMuZGlzYWJsZWQgPSBpc0Rpc2FibGVkO1xuICAgIHRoaXMuc3RhdGVDaGFuZ2VzLm5leHQoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBJbXBsZW1lbnRlZCBhcyBwYXJ0IG9mIE5vdm9GaWVsZENvbnRyb2wuXG4gICAqIEBkb2NzLXByaXZhdGVcbiAgICovXG4gIG9uQ29udGFpbmVyQ2xpY2soZXZlbnQ6IE1vdXNlRXZlbnQpIHtcbiAgICBpZiAoIXRoaXMuX29yaWdpbmF0ZXNGcm9tQ2hpcChldmVudCkpIHtcbiAgICAgIHRoaXMuZm9jdXMoKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogRm9jdXNlcyB0aGUgZmlyc3Qgbm9uLWRpc2FibGVkIGNoaXAgaW4gdGhpcyBjaGlwIGxpc3QsIG9yIHRoZSBhc3NvY2lhdGVkIGlucHV0IHdoZW4gdGhlcmVcbiAgICogYXJlIG5vIGVsaWdpYmxlIGNoaXBzLlxuICAgKi9cbiAgZm9jdXMob3B0aW9ucz86IEZvY3VzT3B0aW9ucyk6IHZvaWQge1xuICAgIGlmICh0aGlzLmRpc2FibGVkKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgLy8gVE9ETzogQVJJQSBzYXlzIHRoaXMgc2hvdWxkIGZvY3VzIHRoZSBmaXJzdCBgc2VsZWN0ZWRgIGNoaXAgaWYgYW55IGFyZSBzZWxlY3RlZC5cbiAgICAvLyBGb2N1cyBvbiBmaXJzdCBlbGVtZW50IGlmIHRoZXJlJ3Mgbm8gY2hpcElucHV0IGluc2lkZSBjaGlwLWxpc3RcbiAgICBpZiAodGhpcy5fY2hpcElucHV0ICYmIHRoaXMuX2NoaXBJbnB1dC5mb2N1c2VkKSB7XG4gICAgICAvLyBkbyBub3RoaW5nXG4gICAgfSBlbHNlIGlmICh0aGlzLl9jaGlwSW5wdXQpIHtcbiAgICAgIHRoaXMuX2ZvY3VzSW5wdXQob3B0aW9ucyk7XG4gICAgICB0aGlzLnN0YXRlQ2hhbmdlcy5uZXh0KCk7XG4gICAgfSBlbHNlIGlmICh0aGlzLmNoaXBzLmxlbmd0aCA+IDApIHtcbiAgICAgIHRoaXMuX2tleU1hbmFnZXIuc2V0Rmlyc3RJdGVtQWN0aXZlKCk7XG4gICAgICB0aGlzLnN0YXRlQ2hhbmdlcy5uZXh0KCk7XG4gICAgfVxuICB9XG5cbiAgLyoqIEF0dGVtcHQgdG8gZm9jdXMgYW4gaW5wdXQgaWYgd2UgaGF2ZSBvbmUuICovXG4gIF9mb2N1c0lucHV0KG9wdGlvbnM/OiBGb2N1c09wdGlvbnMpIHtcbiAgICBpZiAodGhpcy5fY2hpcElucHV0KSB7XG4gICAgICB0aGlzLl9jaGlwSW5wdXQuZm9jdXMob3B0aW9ucyk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIFBhc3MgZXZlbnRzIHRvIHRoZSBrZXlib2FyZCBtYW5hZ2VyLiBBdmFpbGFibGUgaGVyZSBmb3IgdGVzdHMuXG4gICAqL1xuICBfa2V5ZG93bihldmVudDogS2V5Ym9hcmRFdmVudCkge1xuICAgIGNvbnN0IHRhcmdldCA9IGV2ZW50LnRhcmdldCBhcyBIVE1MRWxlbWVudDtcblxuICAgIC8vIElmIHRoZXkgYXJlIG9uIGFuIGVtcHR5IGlucHV0IGFuZCBoaXQgYmFja3NwYWNlLCBmb2N1cyB0aGUgbGFzdCBjaGlwXG4gICAgaWYgKGV2ZW50LmtleSA9PT0gS2V5LkJhY2tzcGFjZSAmJiB0aGlzLl9pc0lucHV0RW1wdHkodGFyZ2V0KSkge1xuICAgICAgdGhpcy5fa2V5TWFuYWdlci5zZXRMYXN0SXRlbUFjdGl2ZSgpO1xuICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICB9IGVsc2UgaWYgKHRhcmdldCAmJiB0YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKCdub3ZvLWNoaXAnKSkge1xuICAgICAgdGhpcy5fa2V5TWFuYWdlci5vbktleWRvd24oZXZlbnQpO1xuICAgICAgdGhpcy5zdGF0ZUNoYW5nZXMubmV4dCgpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBDaGVjayB0aGUgdGFiIGluZGV4IGFzIHlvdSBzaG91bGQgbm90IGJlIGFsbG93ZWQgdG8gZm9jdXMgYW4gZW1wdHkgbGlzdC5cbiAgICovXG4gIHByb3RlY3RlZCBfdXBkYXRlVGFiSW5kZXgoKTogdm9pZCB7XG4gICAgLy8gSWYgd2UgaGF2ZSAwIGNoaXBzLCB3ZSBzaG91bGQgbm90IGFsbG93IGtleWJvYXJkIGZvY3VzXG4gICAgdGhpcy5fdGFiSW5kZXggPSB0aGlzLl91c2VyVGFiSW5kZXggfHwgKHRoaXMuY2hpcHMubGVuZ3RoID09PSAwID8gLTEgOiAwKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBJZiB0aGUgYW1vdW50IG9mIGNoaXBzIGNoYW5nZWQsIHdlIG5lZWQgdG8gdXBkYXRlIHRoZVxuICAgKiBrZXkgbWFuYWdlciBzdGF0ZSBhbmQgZm9jdXMgdGhlIG5leHQgY2xvc2VzdCBjaGlwLlxuICAgKi9cbiAgcHJvdGVjdGVkIF91cGRhdGVGb2N1c0ZvckRlc3Ryb3llZENoaXBzKCkge1xuICAgIC8vIE1vdmUgZm9jdXMgdG8gdGhlIGNsb3Nlc3QgY2hpcC4gSWYgbm8gb3RoZXIgY2hpcHMgcmVtYWluLCBmb2N1cyB0aGUgY2hpcC1saXN0IGl0c2VsZi5cbiAgICBpZiAodGhpcy5fbGFzdERlc3Ryb3llZENoaXBJbmRleCAhPSBudWxsKSB7XG4gICAgICBpZiAodGhpcy5jaGlwcy5sZW5ndGgpIHtcbiAgICAgICAgY29uc3QgbmV3Q2hpcEluZGV4ID0gTWF0aC5taW4odGhpcy5fbGFzdERlc3Ryb3llZENoaXBJbmRleCwgdGhpcy5jaGlwcy5sZW5ndGggLSAxKTtcbiAgICAgICAgdGhpcy5fa2V5TWFuYWdlci5zZXRBY3RpdmVJdGVtKG5ld0NoaXBJbmRleCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLmZvY3VzKCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgdGhpcy5fbGFzdERlc3Ryb3llZENoaXBJbmRleCA9IG51bGw7XG4gIH1cblxuICAvKipcbiAgICogVXRpbGl0eSB0byBlbnN1cmUgYWxsIGluZGV4ZXMgYXJlIHZhbGlkLlxuICAgKlxuICAgKiBAcGFyYW0gaW5kZXggVGhlIGluZGV4IHRvIGJlIGNoZWNrZWQuXG4gICAqIEByZXR1cm5zIFRydWUgaWYgdGhlIGluZGV4IGlzIHZhbGlkIGZvciBvdXIgbGlzdCBvZiBjaGlwcy5cbiAgICovXG4gIHByaXZhdGUgX2lzVmFsaWRJbmRleChpbmRleDogbnVtYmVyKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIGluZGV4ID49IDAgJiYgaW5kZXggPCB0aGlzLmNoaXBzLmxlbmd0aDtcbiAgfVxuXG4gIHByaXZhdGUgX2lzSW5wdXRFbXB0eShlbGVtZW50OiBIVE1MRWxlbWVudCk6IGJvb2xlYW4ge1xuICAgIGlmIChlbGVtZW50ICYmIGVsZW1lbnQubm9kZU5hbWUudG9Mb3dlckNhc2UoKSA9PT0gJ2lucHV0Jykge1xuICAgICAgbGV0IGlucHV0ID0gZWxlbWVudCBhcyBIVE1MSW5wdXRFbGVtZW50O1xuICAgICAgcmV0dXJuICFpbnB1dC52YWx1ZTtcbiAgICB9XG5cbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBfc2V0U2VsZWN0aW9uQnlWYWx1ZSh2YWx1ZTogYW55LCBpc1VzZXJJbnB1dDogYm9vbGVhbiA9IHRydWUpIHtcbiAgICB0aGlzLl9jbGVhclNlbGVjdGlvbigpO1xuICAgIHRoaXMuY2hpcHMuZm9yRWFjaCgoY2hpcCkgPT4gY2hpcC5kZXNlbGVjdCgpKTtcblxuICAgIGlmIChBcnJheS5pc0FycmF5KHZhbHVlKSkge1xuICAgICAgdmFsdWUuZm9yRWFjaCgoY3VycmVudFZhbHVlKSA9PiB0aGlzLl9zZWxlY3RWYWx1ZShjdXJyZW50VmFsdWUsIGlzVXNlcklucHV0KSk7XG4gICAgICB0aGlzLl9zb3J0VmFsdWVzKCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IGNvcnJlc3BvbmRpbmdDaGlwID0gdGhpcy5fc2VsZWN0VmFsdWUodmFsdWUsIGlzVXNlcklucHV0KTtcblxuICAgICAgLy8gU2hpZnQgZm9jdXMgdG8gdGhlIGFjdGl2ZSBpdGVtLiBOb3RlIHRoYXQgd2Ugc2hvdWxkbid0IGRvIHRoaXMgaW4gbXVsdGlwbGVcbiAgICAgIC8vIG1vZGUsIGJlY2F1c2Ugd2UgZG9uJ3Qga25vdyB3aGF0IGNoaXAgdGhlIHVzZXIgaW50ZXJhY3RlZCB3aXRoIGxhc3QuXG4gICAgICBpZiAoY29ycmVzcG9uZGluZ0NoaXApIHtcbiAgICAgICAgaWYgKGlzVXNlcklucHV0KSB7XG4gICAgICAgICAgdGhpcy5fa2V5TWFuYWdlci5zZXRBY3RpdmVJdGVtKGNvcnJlc3BvbmRpbmdDaGlwKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBGaW5kcyBhbmQgc2VsZWN0cyB0aGUgY2hpcCBiYXNlZCBvbiBpdHMgdmFsdWUuXG4gICAqIEByZXR1cm5zIENoaXAgdGhhdCBoYXMgdGhlIGNvcnJlc3BvbmRpbmcgdmFsdWUuXG4gICAqL1xuICBwcml2YXRlIF9zZWxlY3RWYWx1ZSh2YWx1ZTogYW55LCBpc1VzZXJJbnB1dDogYm9vbGVhbiA9IHRydWUpOiBOb3ZvQ2hpcEVsZW1lbnQgfCB1bmRlZmluZWQge1xuICAgIGNvbnN0IGNvcnJlc3BvbmRpbmdDaGlwID0gdGhpcy5jaGlwcy5maW5kKChjaGlwKSA9PiB7XG4gICAgICByZXR1cm4gY2hpcC52YWx1ZSAhPSBudWxsICYmIHRoaXMuX2NvbXBhcmVXaXRoKGNoaXAudmFsdWUsIHZhbHVlKTtcbiAgICB9KTtcblxuICAgIGlmIChjb3JyZXNwb25kaW5nQ2hpcCkge1xuICAgICAgaXNVc2VySW5wdXQgPyBjb3JyZXNwb25kaW5nQ2hpcC5zZWxlY3RWaWFJbnRlcmFjdGlvbigpIDogY29ycmVzcG9uZGluZ0NoaXAuc2VsZWN0KCk7XG4gICAgICB0aGlzLl9zZWxlY3Rpb25Nb2RlbC5zZWxlY3QoY29ycmVzcG9uZGluZ0NoaXApO1xuICAgIH1cblxuICAgIHJldHVybiBjb3JyZXNwb25kaW5nQ2hpcDtcbiAgfVxuXG4gIHByaXZhdGUgX2luaXRpYWxpemVTZWxlY3Rpb24oKTogdm9pZCB7XG4gICAgLy8gRGVmZXIgc2V0dGluZyB0aGUgdmFsdWUgaW4gb3JkZXIgdG8gYXZvaWQgdGhlIFwiRXhwcmVzc2lvblxuICAgIC8vIGhhcyBjaGFuZ2VkIGFmdGVyIGl0IHdhcyBjaGVja2VkXCIgZXJyb3JzIGZyb20gQW5ndWxhci5cbiAgICBQcm9taXNlLnJlc29sdmUoKS50aGVuKCgpID0+IHtcbiAgICAgIGlmICh0aGlzLm5nQ29udHJvbCB8fCB0aGlzLl92YWx1ZSkge1xuICAgICAgICB0aGlzLl9zZXRTZWxlY3Rpb25CeVZhbHVlKHRoaXMubmdDb250cm9sID8gdGhpcy5uZ0NvbnRyb2wudmFsdWUgOiB0aGlzLl92YWx1ZSwgZmFsc2UpO1xuICAgICAgICB0aGlzLnN0YXRlQ2hhbmdlcy5uZXh0KCk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogRGVzZWxlY3RzIGV2ZXJ5IGNoaXAgaW4gdGhlIGxpc3QuXG4gICAqIEBwYXJhbSBza2lwIENoaXAgdGhhdCBzaG91bGQgbm90IGJlIGRlc2VsZWN0ZWQuXG4gICAqL1xuICBwcml2YXRlIF9jbGVhclNlbGVjdGlvbihza2lwPzogTm92b0NoaXBFbGVtZW50KTogdm9pZCB7XG4gICAgdGhpcy5fc2VsZWN0aW9uTW9kZWwuY2xlYXIoKTtcbiAgICB0aGlzLmNoaXBzLmZvckVhY2goKGNoaXApID0+IHtcbiAgICAgIGlmIChjaGlwICE9PSBza2lwKSB7XG4gICAgICAgIGNoaXAuZGVzZWxlY3QoKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgICB0aGlzLnN0YXRlQ2hhbmdlcy5uZXh0KCk7XG4gIH1cblxuICAvKipcbiAgICogU29ydHMgdGhlIG1vZGVsIHZhbHVlcywgZW5zdXJpbmcgdGhhdCB0aGV5IGtlZXAgdGhlIHNhbWVcbiAgICogb3JkZXIgdGhhdCB0aGV5IGhhdmUgaW4gdGhlIHBhbmVsLlxuICAgKi9cbiAgcHJpdmF0ZSBfc29ydFZhbHVlcygpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5fbXVsdGlwbGUpIHtcbiAgICAgIHRoaXMuX3NlbGVjdGlvbk1vZGVsLmNsZWFyKCk7XG5cbiAgICAgIHRoaXMuY2hpcHMuZm9yRWFjaCgoY2hpcCkgPT4ge1xuICAgICAgICBpZiAoY2hpcC5zZWxlY3RlZCkge1xuICAgICAgICAgIHRoaXMuX3NlbGVjdGlvbk1vZGVsLnNlbGVjdChjaGlwKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgICB0aGlzLnN0YXRlQ2hhbmdlcy5uZXh0KCk7XG4gICAgfVxuICB9XG5cbiAgLyoqIEVtaXRzIGNoYW5nZSBldmVudCB0byBzZXQgdGhlIG1vZGVsIHZhbHVlLiAqL1xuICBwcml2YXRlIF9wcm9wYWdhdGVDaGFuZ2VzKGZhbGxiYWNrVmFsdWU/OiBhbnkpOiB2b2lkIHtcbiAgICBsZXQgdmFsdWVUb0VtaXQ6IGFueSA9IG51bGw7XG5cbiAgICBpZiAoQXJyYXkuaXNBcnJheSh0aGlzLnNlbGVjdGVkKSkge1xuICAgICAgdmFsdWVUb0VtaXQgPSB0aGlzLnNlbGVjdGVkLm1hcCgoY2hpcCkgPT4gY2hpcC52YWx1ZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhbHVlVG9FbWl0ID0gdGhpcy5zZWxlY3RlZCA/IHRoaXMuc2VsZWN0ZWQudmFsdWUgOiBmYWxsYmFja1ZhbHVlO1xuICAgIH1cbiAgICB0aGlzLl92YWx1ZSA9IHZhbHVlVG9FbWl0O1xuICAgIHRoaXMuY2hhbmdlLmVtaXQobmV3IE5vdm9DaGlwTGlzdENoYW5nZSh0aGlzLCB2YWx1ZVRvRW1pdCkpO1xuICAgIHRoaXMudmFsdWVDaGFuZ2UuZW1pdCh2YWx1ZVRvRW1pdCk7XG4gICAgdGhpcy5fb25DaGFuZ2UodmFsdWVUb0VtaXQpO1xuICAgIHRoaXMuX2NoYW5nZURldGVjdG9yUmVmLm1hcmtGb3JDaGVjaygpO1xuICB9XG5cbiAgLyoqIFdoZW4gYmx1cnJlZCwgbWFyayB0aGUgZmllbGQgYXMgdG91Y2hlZCB3aGVuIGZvY3VzIG1vdmVkIG91dHNpZGUgdGhlIGNoaXAgbGlzdC4gKi9cbiAgX2JsdXIoKSB7XG4gICAgaWYgKCF0aGlzLl9oYXNGb2N1c2VkQ2hpcCgpKSB7XG4gICAgICB0aGlzLl9rZXlNYW5hZ2VyLnNldEFjdGl2ZUl0ZW0oLTEpO1xuICAgIH1cblxuICAgIGlmICghdGhpcy5kaXNhYmxlZCkge1xuICAgICAgaWYgKHRoaXMuX2NoaXBJbnB1dCkge1xuICAgICAgICAvLyBJZiB0aGVyZSdzIGEgY2hpcCBpbnB1dCwgd2Ugc2hvdWxkIGNoZWNrIHdoZXRoZXIgdGhlIGZvY3VzIG1vdmVkIHRvIGNoaXAgaW5wdXQuXG4gICAgICAgIC8vIElmIHRoZSBmb2N1cyBpcyBub3QgbW92ZWQgdG8gY2hpcCBpbnB1dCwgbWFyayB0aGUgZmllbGQgYXMgdG91Y2hlZC4gSWYgdGhlIGZvY3VzIG1vdmVkXG4gICAgICAgIC8vIHRvIGNoaXAgaW5wdXQsIGRvIG5vdGhpbmcuXG4gICAgICAgIC8vIFRpbWVvdXQgaXMgbmVlZGVkIHRvIHdhaXQgZm9yIHRoZSBmb2N1cygpIGV2ZW50IHRyaWdnZXIgb24gY2hpcCBpbnB1dC5cbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgaWYgKCF0aGlzLmZvY3VzZWQpIHtcbiAgICAgICAgICAgIHRoaXMuX21hcmtBc1RvdWNoZWQoKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8gSWYgdGhlcmUncyBubyBjaGlwIGlucHV0LCB0aGVuIG1hcmsgdGhlIGZpZWxkIGFzIHRvdWNoZWQuXG4gICAgICAgIHRoaXMuX21hcmtBc1RvdWNoZWQoKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAvKiogTWFyayB0aGUgZmllbGQgYXMgdG91Y2hlZCAqL1xuICBfbWFya0FzVG91Y2hlZCgpIHtcbiAgICB0aGlzLl9vblRvdWNoZWQoKTtcbiAgICB0aGlzLl9jaGFuZ2VEZXRlY3RvclJlZi5tYXJrRm9yQ2hlY2soKTtcbiAgICB0aGlzLnN0YXRlQ2hhbmdlcy5uZXh0KCk7XG4gIH1cblxuICAvKipcbiAgICogUmVtb3ZlcyB0aGUgYHRhYmluZGV4YCBmcm9tIHRoZSBjaGlwIGxpc3QgYW5kIHJlc2V0cyBpdCBiYWNrIGFmdGVyd2FyZHMsIGFsbG93aW5nIHRoZVxuICAgKiB1c2VyIHRvIHRhYiBvdXQgb2YgaXQuIFRoaXMgcHJldmVudHMgdGhlIGxpc3QgZnJvbSBjYXB0dXJpbmcgZm9jdXMgYW5kIHJlZGlyZWN0aW5nXG4gICAqIGl0IGJhY2sgdG8gdGhlIGZpcnN0IGNoaXAsIGNyZWF0aW5nIGEgZm9jdXMgdHJhcCwgaWYgaXQgdXNlciB0cmllcyB0byB0YWIgYXdheS5cbiAgICovXG4gIF9hbGxvd0ZvY3VzRXNjYXBlKCkge1xuICAgIGlmICh0aGlzLl90YWJJbmRleCAhPT0gLTEpIHtcbiAgICAgIHRoaXMuX3RhYkluZGV4ID0gLTE7XG5cbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICB0aGlzLl90YWJJbmRleCA9IHRoaXMuX3VzZXJUYWJJbmRleCB8fCAwO1xuICAgICAgICB0aGlzLl9jaGFuZ2VEZXRlY3RvclJlZi5tYXJrRm9yQ2hlY2soKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgX3Jlc2V0Q2hpcHMoKSB7XG4gICAgdGhpcy5fZHJvcFN1YnNjcmlwdGlvbnMoKTtcbiAgICB0aGlzLl9saXN0ZW5Ub0NoaXBzRm9jdXMoKTtcbiAgICB0aGlzLl9saXN0ZW5Ub0NoaXBzU2VsZWN0aW9uKCk7XG4gICAgdGhpcy5fbGlzdGVuVG9DaGlwc1JlbW92ZWQoKTtcbiAgfVxuXG4gIHByaXZhdGUgX2Ryb3BTdWJzY3JpcHRpb25zKCkge1xuICAgIGlmICh0aGlzLl9jaGlwRm9jdXNTdWJzY3JpcHRpb24pIHtcbiAgICAgIHRoaXMuX2NoaXBGb2N1c1N1YnNjcmlwdGlvbi51bnN1YnNjcmliZSgpO1xuICAgICAgdGhpcy5fY2hpcEZvY3VzU3Vic2NyaXB0aW9uID0gbnVsbDtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5fY2hpcEJsdXJTdWJzY3JpcHRpb24pIHtcbiAgICAgIHRoaXMuX2NoaXBCbHVyU3Vic2NyaXB0aW9uLnVuc3Vic2NyaWJlKCk7XG4gICAgICB0aGlzLl9jaGlwQmx1clN1YnNjcmlwdGlvbiA9IG51bGw7XG4gICAgfVxuXG4gICAgaWYgKHRoaXMuX2NoaXBTZWxlY3Rpb25TdWJzY3JpcHRpb24pIHtcbiAgICAgIHRoaXMuX2NoaXBTZWxlY3Rpb25TdWJzY3JpcHRpb24udW5zdWJzY3JpYmUoKTtcbiAgICAgIHRoaXMuX2NoaXBTZWxlY3Rpb25TdWJzY3JpcHRpb24gPSBudWxsO1xuICAgIH1cblxuICAgIGlmICh0aGlzLl9jaGlwUmVtb3ZlU3Vic2NyaXB0aW9uKSB7XG4gICAgICB0aGlzLl9jaGlwUmVtb3ZlU3Vic2NyaXB0aW9uLnVuc3Vic2NyaWJlKCk7XG4gICAgICB0aGlzLl9jaGlwUmVtb3ZlU3Vic2NyaXB0aW9uID0gbnVsbDtcbiAgICB9XG4gIH1cblxuICAvKiogTGlzdGVucyB0byB1c2VyLWdlbmVyYXRlZCBzZWxlY3Rpb24gZXZlbnRzIG9uIGVhY2ggY2hpcC4gKi9cbiAgcHJpdmF0ZSBfbGlzdGVuVG9DaGlwc1NlbGVjdGlvbigpOiB2b2lkIHtcbiAgICB0aGlzLl9jaGlwU2VsZWN0aW9uU3Vic2NyaXB0aW9uID0gdGhpcy5jaGlwU2VsZWN0aW9uQ2hhbmdlcy5zdWJzY3JpYmUoKGV2ZW50KSA9PiB7XG4gICAgICBldmVudC5zb3VyY2Uuc2VsZWN0ZWQgPyB0aGlzLl9zZWxlY3Rpb25Nb2RlbC5zZWxlY3QoZXZlbnQuc291cmNlKSA6IHRoaXMuX3NlbGVjdGlvbk1vZGVsLmRlc2VsZWN0KGV2ZW50LnNvdXJjZSk7XG5cbiAgICAgIC8vIEZvciBzaW5nbGUgc2VsZWN0aW9uIGNoaXAgbGlzdCwgbWFrZSBzdXJlIHRoZSBkZXNlbGVjdGVkIHZhbHVlIGlzIHVuc2VsZWN0ZWQuXG4gICAgICBpZiAoIXRoaXMubXVsdGlwbGUpIHtcbiAgICAgICAgdGhpcy5jaGlwcy5mb3JFYWNoKChjaGlwKSA9PiB7XG4gICAgICAgICAgaWYgKCF0aGlzLl9zZWxlY3Rpb25Nb2RlbC5pc1NlbGVjdGVkKGNoaXApICYmIGNoaXAuc2VsZWN0ZWQpIHtcbiAgICAgICAgICAgIGNoaXAuZGVzZWxlY3QoKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgfVxuXG4gICAgICBpZiAoZXZlbnQuaXNVc2VySW5wdXQpIHtcbiAgICAgICAgdGhpcy5fcHJvcGFnYXRlQ2hhbmdlcygpO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgLyoqIExpc3RlbnMgdG8gdXNlci1nZW5lcmF0ZWQgc2VsZWN0aW9uIGV2ZW50cyBvbiBlYWNoIGNoaXAuICovXG4gIHByaXZhdGUgX2xpc3RlblRvQ2hpcHNGb2N1cygpOiB2b2lkIHtcbiAgICB0aGlzLl9jaGlwRm9jdXNTdWJzY3JpcHRpb24gPSB0aGlzLmNoaXBGb2N1c0NoYW5nZXMuc3Vic2NyaWJlKChldmVudCkgPT4ge1xuICAgICAgbGV0IGNoaXBJbmRleDogbnVtYmVyID0gdGhpcy5jaGlwcy50b0FycmF5KCkuaW5kZXhPZihldmVudC5jaGlwKTtcblxuICAgICAgaWYgKHRoaXMuX2lzVmFsaWRJbmRleChjaGlwSW5kZXgpKSB7XG4gICAgICAgIHRoaXMuX2tleU1hbmFnZXIudXBkYXRlQWN0aXZlSXRlbShjaGlwSW5kZXgpO1xuICAgICAgfVxuICAgICAgdGhpcy5zdGF0ZUNoYW5nZXMubmV4dCgpO1xuICAgIH0pO1xuXG4gICAgdGhpcy5fY2hpcEJsdXJTdWJzY3JpcHRpb24gPSB0aGlzLmNoaXBCbHVyQ2hhbmdlcy5zdWJzY3JpYmUoKCkgPT4ge1xuICAgICAgdGhpcy5fYmx1cigpO1xuICAgICAgdGhpcy5zdGF0ZUNoYW5nZXMubmV4dCgpO1xuICAgIH0pO1xuICB9XG5cbiAgcHJpdmF0ZSBfbGlzdGVuVG9DaGlwc1JlbW92ZWQoKTogdm9pZCB7XG4gICAgdGhpcy5fY2hpcFJlbW92ZVN1YnNjcmlwdGlvbiA9IHRoaXMuY2hpcFJlbW92ZUNoYW5nZXMuc3Vic2NyaWJlKChldmVudCkgPT4ge1xuICAgICAgY29uc3QgY2hpcCA9IGV2ZW50LmNoaXA7XG4gICAgICBjb25zdCBjaGlwSW5kZXggPSB0aGlzLmNoaXBzLnRvQXJyYXkoKS5pbmRleE9mKGV2ZW50LmNoaXApO1xuXG4gICAgICAvLyBJbiBjYXNlIHRoZSBjaGlwIHRoYXQgd2lsbCBiZSByZW1vdmVkIGlzIGN1cnJlbnRseSBmb2N1c2VkLCB3ZSB0ZW1wb3JhcmlseSBzdG9yZVxuICAgICAgLy8gdGhlIGluZGV4IGluIG9yZGVyIHRvIGJlIGFibGUgdG8gZGV0ZXJtaW5lIGFuIGFwcHJvcHJpYXRlIHNpYmxpbmcgY2hpcCB0aGF0IHdpbGxcbiAgICAgIC8vIHJlY2VpdmUgZm9jdXMuXG4gICAgICBpZiAodGhpcy5faXNWYWxpZEluZGV4KGNoaXBJbmRleCkgJiYgY2hpcC5faGFzRm9jdXMpIHtcbiAgICAgICAgdGhpcy5fbGFzdERlc3Ryb3llZENoaXBJbmRleCA9IGNoaXBJbmRleDtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIC8qKiBDaGVja3Mgd2hldGhlciBhbiBldmVudCBjb21lcyBmcm9tIGluc2lkZSBhIGNoaXAgZWxlbWVudC4gKi9cbiAgcHJpdmF0ZSBfb3JpZ2luYXRlc0Zyb21DaGlwKGV2ZW50OiBFdmVudCk6IGJvb2xlYW4ge1xuICAgIGxldCBjdXJyZW50RWxlbWVudCA9IGV2ZW50LnRhcmdldCBhcyBIVE1MRWxlbWVudCB8IG51bGw7XG5cbiAgICB3aGlsZSAoY3VycmVudEVsZW1lbnQgJiYgY3VycmVudEVsZW1lbnQgIT09IHRoaXMuX2VsZW1lbnRSZWYubmF0aXZlRWxlbWVudCkge1xuICAgICAgaWYgKGN1cnJlbnRFbGVtZW50LmNsYXNzTGlzdC5jb250YWlucygnbm92by1jaGlwJykpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG5cbiAgICAgIGN1cnJlbnRFbGVtZW50ID0gY3VycmVudEVsZW1lbnQucGFyZW50RWxlbWVudDtcbiAgICB9XG5cbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICAvKiogQ2hlY2tzIHdoZXRoZXIgYW55IG9mIHRoZSBjaGlwcyBpcyBmb2N1c2VkLiAqL1xuICBwcml2YXRlIF9oYXNGb2N1c2VkQ2hpcCgpIHtcbiAgICByZXR1cm4gdGhpcy5jaGlwcyAmJiB0aGlzLmNoaXBzLnNvbWUoKGNoaXApID0+IGNoaXAuX2hhc0ZvY3VzKTtcbiAgfVxuXG4gIC8qKiBTeW5jcyB0aGUgbGlzdCdzIHN0YXRlIHdpdGggdGhlIGluZGl2aWR1YWwgY2hpcHMuICovXG4gIHByaXZhdGUgX3N5bmNDaGlwc1N0YXRlKCkge1xuICAgIGlmICh0aGlzLmNoaXBzKSB7XG4gICAgICB0aGlzLmNoaXBzLmZvckVhY2goKGNoaXApID0+IHtcbiAgICAgICAgY2hpcC5fY2hpcExpc3REaXNhYmxlZCA9IHRoaXMuX2Rpc2FibGVkO1xuICAgICAgICBjaGlwLl9jaGlwTGlzdE11bHRpcGxlID0gdGhpcy5tdWx0aXBsZTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIHN0YXRpYyBuZ0FjY2VwdElucHV0VHlwZV9tdWx0aXBsZTogQm9vbGVhbklucHV0O1xuICBzdGF0aWMgbmdBY2NlcHRJbnB1dFR5cGVfcmVxdWlyZWQ6IEJvb2xlYW5JbnB1dDtcbiAgc3RhdGljIG5nQWNjZXB0SW5wdXRUeXBlX2Rpc2FibGVkOiBCb29sZWFuSW5wdXQ7XG4gIHN0YXRpYyBuZ0FjY2VwdElucHV0VHlwZV9zZWxlY3RhYmxlOiBCb29sZWFuSW5wdXQ7XG59XG4iXX0=