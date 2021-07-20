import { FocusKeyManager } from '@angular/cdk/a11y';
import { Directionality } from '@angular/cdk/bidi';
import { coerceBooleanProperty } from '@angular/cdk/coercion';
import { SelectionModel } from '@angular/cdk/collections';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ContentChildren, ElementRef, EventEmitter, Input, Optional, Output, QueryList, Self, ViewEncapsulation, } from '@angular/core';
import { FormGroupDirective, NgControl, NgForm } from '@angular/forms';
import { merge, Subject } from 'rxjs';
import { startWith, takeUntil } from 'rxjs/operators';
import { ErrorStateMatcher, mixinErrorState, NOVO_OPTION_PARENT_COMPONENT } from '../common';
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
        this.controlType = 'chip-list';
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
        /** @docs-private Implemented as part of NovoFieldControl. */
        this.lastKeyValue = null;
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
    } }, inputs: { errorStateMatcher: "errorStateMatcher", multiple: "multiple", stacked: "stacked", compareWith: "compareWith", value: "value", required: "required", placeholder: "placeholder", disabled: "disabled", ariaOrientation: ["aria-orientation", "ariaOrientation"], selectable: "selectable", tabIndex: "tabIndex" }, outputs: { change: "change", valueChange: "valueChange" }, exportAs: ["novoChipList"], features: [i0.ɵɵProvidersFeature([
            { provide: NovoFieldControl, useExisting: NovoChipList },
            { provide: NOVO_OPTION_PARENT_COMPONENT, useExisting: NovoChipList },
        ]), i0.ɵɵInheritDefinitionFeature], ngContentSelectors: _c0, decls: 2, vars: 0, consts: [[1, "novo-chip-list-wrapper"]], template: function NovoChipList_Template(rf, ctx) { if (rf & 1) {
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
                providers: [
                    { provide: NovoFieldControl, useExisting: NovoChipList },
                    { provide: NOVO_OPTION_PARENT_COMPONENT, useExisting: NovoChipList },
                ],
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ2hpcExpc3QuanMiLCJzb3VyY2VSb290IjoiL2hvbWUvcnVubmVyL3dvcmsvbm92by1lbGVtZW50cy9ub3ZvLWVsZW1lbnRzL3Byb2plY3RzL25vdm8tZWxlbWVudHMvc3JjLyIsInNvdXJjZXMiOlsiZWxlbWVudHMvY2hpcHMvQ2hpcExpc3QudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBQ3BELE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUNuRCxPQUFPLEVBQWdCLHFCQUFxQixFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFDNUUsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLDBCQUEwQixDQUFDO0FBQzFELE9BQU8sRUFFTCx1QkFBdUIsRUFDdkIsaUJBQWlCLEVBQ2pCLFNBQVMsRUFDVCxlQUFlLEVBRWYsVUFBVSxFQUNWLFlBQVksRUFDWixLQUFLLEVBR0wsUUFBUSxFQUNSLE1BQU0sRUFDTixTQUFTLEVBQ1QsSUFBSSxFQUNKLGlCQUFpQixHQUNsQixNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQXdCLGtCQUFrQixFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUM3RixPQUFPLEVBQUUsS0FBSyxFQUFjLE9BQU8sRUFBZ0IsTUFBTSxNQUFNLENBQUM7QUFDaEUsT0FBTyxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUV0RCxPQUFPLEVBQWdELGlCQUFpQixFQUFFLGVBQWUsRUFBRSw0QkFBNEIsRUFBRSxNQUFNLFdBQVcsQ0FBQztBQUMzSSxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxVQUFVLENBQUM7QUFDNUMsT0FBTyxFQUFFLGVBQWUsRUFBMEMsTUFBTSxRQUFRLENBQUM7Ozs7OztBQUdqRixtREFBbUQ7QUFDbkQsb0JBQW9CO0FBQ3BCLE1BQU0sZ0JBQWdCO0lBQ3BCLFlB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O21CQUFDLGVBQWUsRUFBRTtvQkFDaEMsdUVBQXVFO29CQUN2RSw4Q0FBOEM7b0JBQzlDLFdBQVcsRUFBRSxJQUFJO2lCQUNsQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEZvY3VzS2V5TWFuYWdlciB9IGZyb20gJ0Bhbmd1bGFyL2Nkay9hMTF5JztcbmltcG9ydCB7IERpcmVjdGlvbmFsaXR5IH0gZnJvbSAnQGFuZ3VsYXIvY2RrL2JpZGknO1xuaW1wb3J0IHsgQm9vbGVhbklucHV0LCBjb2VyY2VCb29sZWFuUHJvcGVydHkgfSBmcm9tICdAYW5ndWxhci9jZGsvY29lcmNpb24nO1xuaW1wb3J0IHsgU2VsZWN0aW9uTW9kZWwgfSBmcm9tICdAYW5ndWxhci9jZGsvY29sbGVjdGlvbnMnO1xuaW1wb3J0IHtcbiAgQWZ0ZXJDb250ZW50SW5pdCxcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXG4gIENoYW5nZURldGVjdG9yUmVmLFxuICBDb21wb25lbnQsXG4gIENvbnRlbnRDaGlsZHJlbixcbiAgRG9DaGVjayxcbiAgRWxlbWVudFJlZixcbiAgRXZlbnRFbWl0dGVyLFxuICBJbnB1dCxcbiAgT25EZXN0cm95LFxuICBPbkluaXQsXG4gIE9wdGlvbmFsLFxuICBPdXRwdXQsXG4gIFF1ZXJ5TGlzdCxcbiAgU2VsZixcbiAgVmlld0VuY2Fwc3VsYXRpb24sXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29udHJvbFZhbHVlQWNjZXNzb3IsIEZvcm1Hcm91cERpcmVjdGl2ZSwgTmdDb250cm9sLCBOZ0Zvcm0gfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQgeyBtZXJnZSwgT2JzZXJ2YWJsZSwgU3ViamVjdCwgU3Vic2NyaXB0aW9uIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBzdGFydFdpdGgsIHRha2VVbnRpbCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7IEtleSB9IGZyb20gJy4uLy4uL3V0aWxzJztcbmltcG9ydCB7IENhblVwZGF0ZUVycm9yU3RhdGUsIENhblVwZGF0ZUVycm9yU3RhdGVDdG9yLCBFcnJvclN0YXRlTWF0Y2hlciwgbWl4aW5FcnJvclN0YXRlLCBOT1ZPX09QVElPTl9QQVJFTlRfQ09NUE9ORU5UIH0gZnJvbSAnLi4vY29tbW9uJztcbmltcG9ydCB7IE5vdm9GaWVsZENvbnRyb2wgfSBmcm9tICcuLi9maWVsZCc7XG5pbXBvcnQgeyBOb3ZvQ2hpcEVsZW1lbnQsIE5vdm9DaGlwRXZlbnQsIE5vdm9DaGlwU2VsZWN0aW9uQ2hhbmdlIH0gZnJvbSAnLi9DaGlwJztcbmltcG9ydCB7IE5vdm9DaGlwVGV4dENvbnRyb2wgfSBmcm9tICcuL0NoaXBUZXh0Q29udHJvbCc7XG5cbi8vIEJvaWxlcnBsYXRlIGZvciBhcHBseWluZyBtaXhpbnMgdG8gTm92b0NoaXBMaXN0LlxuLyoqIEBkb2NzLXByaXZhdGUgKi9cbmNsYXNzIE5vdm9DaGlwTGlzdEJhc2Uge1xuICBjb25zdHJ1Y3RvcihcbiAgICBwdWJsaWMgX2RlZmF1bHRFcnJvclN0YXRlTWF0Y2hlcjogRXJyb3JTdGF0ZU1hdGNoZXIsXG4gICAgcHVibGljIF9wYXJlbnRGb3JtOiBOZ0Zvcm0sXG4gICAgcHVibGljIF9wYXJlbnRGb3JtR3JvdXA6IEZvcm1Hcm91cERpcmVjdGl2ZSxcbiAgICAvKiogQGRvY3MtcHJpdmF0ZSAqL1xuICAgIHB1YmxpYyBuZ0NvbnRyb2w6IE5nQ29udHJvbCxcbiAgKSB7fVxufVxuY29uc3QgX05vdm9DaGlwTGlzdE1peGluQmFzZTogQ2FuVXBkYXRlRXJyb3JTdGF0ZUN0b3IgJiB0eXBlb2YgTm92b0NoaXBMaXN0QmFzZSA9IG1peGluRXJyb3JTdGF0ZShOb3ZvQ2hpcExpc3RCYXNlKTtcblxuLy8gSW5jcmVhc2luZyBpbnRlZ2VyIGZvciBnZW5lcmF0aW5nIHVuaXF1ZSBpZHMgZm9yIGNoaXAtbGlzdCBjb21wb25lbnRzLlxubGV0IG5leHRVbmlxdWVJZCA9IDA7XG5cbi8qKiBDaGFuZ2UgZXZlbnQgb2JqZWN0IHRoYXQgaXMgZW1pdHRlZCB3aGVuIHRoZSBjaGlwIGxpc3QgdmFsdWUgaGFzIGNoYW5nZWQuICovXG5leHBvcnQgY2xhc3MgTm92b0NoaXBMaXN0Q2hhbmdlIHtcbiAgY29uc3RydWN0b3IoXG4gICAgLyoqIENoaXAgbGlzdCB0aGF0IGVtaXR0ZWQgdGhlIGV2ZW50LiAqL1xuICAgIHB1YmxpYyBzb3VyY2U6IE5vdm9DaGlwTGlzdCxcbiAgICAvKiogVmFsdWUgb2YgdGhlIGNoaXAgbGlzdCB3aGVuIHRoZSBldmVudCB3YXMgZW1pdHRlZC4gKi9cbiAgICBwdWJsaWMgdmFsdWU6IGFueSxcbiAgKSB7fVxufVxuXG4vKipcbiAqIEEgbWF0ZXJpYWwgZGVzaWduIGNoaXBzIGNvbXBvbmVudCAobmFtZWQgQ2hpcExpc3QgZm9yIGl0cyBzaW1pbGFyaXR5IHRvIHRoZSBMaXN0IGNvbXBvbmVudCkuXG4gKi9cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ25vdm8tY2hpcC1saXN0JyxcbiAgdGVtcGxhdGU6IGA8ZGl2IGNsYXNzPVwibm92by1jaGlwLWxpc3Qtd3JhcHBlclwiPjxuZy1jb250ZW50PjwvbmctY29udGVudD48L2Rpdj5gLFxuICBleHBvcnRBczogJ25vdm9DaGlwTGlzdCcsXG4gIGhvc3Q6IHtcbiAgICAnW2F0dHIudGFiaW5kZXhdJzogJ2Rpc2FibGVkID8gbnVsbCA6IF90YWJJbmRleCcsXG4gICAgJ1thdHRyLmFyaWEtZGVzY3JpYmVkYnldJzogJ19hcmlhRGVzY3JpYmVkYnkgfHwgbnVsbCcsXG4gICAgJ1thdHRyLmFyaWEtcmVxdWlyZWRdJzogJ3JvbGUgPyByZXF1aXJlZCA6IG51bGwnLFxuICAgICdbYXR0ci5hcmlhLWRpc2FibGVkXSc6ICdkaXNhYmxlZC50b1N0cmluZygpJyxcbiAgICAnW2F0dHIuYXJpYS1pbnZhbGlkXSc6ICdlcnJvclN0YXRlJyxcbiAgICAnW2F0dHIuYXJpYS1tdWx0aXNlbGVjdGFibGVdJzogJ211bHRpcGxlJyxcbiAgICAnW2F0dHIucm9sZV0nOiAncm9sZScsXG4gICAgJ1tjbGFzcy5ub3ZvLWNoaXAtbGlzdC1zdGFja2VkXSc6ICdzdGFja2VkJyxcbiAgICAnW2NsYXNzLm5vdm8tY2hpcC1saXN0LWZvY3VzZWRdJzogJ2ZvY3VzZWQnLFxuICAgICdbY2xhc3Mubm92by1jaGlwLWxpc3QtZGlzYWJsZWRdJzogJ2Rpc2FibGVkJyxcbiAgICAnW2NsYXNzLm5vdm8tY2hpcC1saXN0LWludmFsaWRdJzogJ2Vycm9yU3RhdGUnLFxuICAgICdbY2xhc3Mubm92by1jaGlwLWxpc3QtcmVxdWlyZWRdJzogJ3JlcXVpcmVkJyxcbiAgICAnW2F0dHIuYXJpYS1vcmllbnRhdGlvbl0nOiAnYXJpYU9yaWVudGF0aW9uJyxcbiAgICBjbGFzczogJ25vdm8tY2hpcC1saXN0JyxcbiAgICAnKGZvY3VzKSc6ICdmb2N1cygpJyxcbiAgICAnKGJsdXIpJzogJ19ibHVyKCknLFxuICAgICcoa2V5ZG93biknOiAnX2tleWRvd24oJGV2ZW50KScsXG4gICAgJ1tpZF0nOiAnX3VpZCcsXG4gIH0sXG4gIHByb3ZpZGVyczogW1xuICAgIHsgcHJvdmlkZTogTm92b0ZpZWxkQ29udHJvbCwgdXNlRXhpc3Rpbmc6IE5vdm9DaGlwTGlzdCB9LFxuICAgIHsgcHJvdmlkZTogTk9WT19PUFRJT05fUEFSRU5UX0NPTVBPTkVOVCwgdXNlRXhpc3Rpbmc6IE5vdm9DaGlwTGlzdCB9LFxuICBdLFxuICAvLyBzdHlsZVVybHM6IFsnLi9DaGlwTGlzdC5zY3NzJ10sXG4gIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmUsXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxufSlcbmV4cG9ydCBjbGFzcyBOb3ZvQ2hpcExpc3RcbiAgZXh0ZW5kcyBfTm92b0NoaXBMaXN0TWl4aW5CYXNlXG4gIGltcGxlbWVudHMgTm92b0ZpZWxkQ29udHJvbDxhbnk+LCBDb250cm9sVmFsdWVBY2Nlc3NvciwgQWZ0ZXJDb250ZW50SW5pdCwgRG9DaGVjaywgT25Jbml0LCBPbkRlc3Ryb3ksIENhblVwZGF0ZUVycm9yU3RhdGUge1xuICAvKipcbiAgICogSW1wbGVtZW50ZWQgYXMgcGFydCBvZiBOb3ZvRmllbGRDb250cm9sLlxuICAgKiBAZG9jcy1wcml2YXRlXG4gICAqL1xuICByZWFkb25seSBjb250cm9sVHlwZTogc3RyaW5nID0gJ2NoaXAtbGlzdCc7XG5cbiAgLyoqXG4gICAqIFdoZW4gYSBjaGlwIGlzIGRlc3Ryb3llZCwgd2Ugc3RvcmUgdGhlIGluZGV4IG9mIHRoZSBkZXN0cm95ZWQgY2hpcCB1bnRpbCB0aGUgY2hpcHNcbiAgICogcXVlcnkgbGlzdCBub3RpZmllcyBhYm91dCB0aGUgdXBkYXRlLiBUaGlzIGlzIG5lY2Vzc2FyeSBiZWNhdXNlIHdlIGNhbm5vdCBkZXRlcm1pbmUgYW5cbiAgICogYXBwcm9wcmlhdGUgY2hpcCB0aGF0IHNob3VsZCByZWNlaXZlIGZvY3VzIHVudGlsIHRoZSBhcnJheSBvZiBjaGlwcyB1cGRhdGVkIGNvbXBsZXRlbHkuXG4gICAqL1xuICBwcml2YXRlIF9sYXN0RGVzdHJveWVkQ2hpcEluZGV4OiBudW1iZXIgfCBudWxsID0gbnVsbDtcblxuICAvKiogU3ViamVjdCB0aGF0IGVtaXRzIHdoZW4gdGhlIGNvbXBvbmVudCBoYXMgYmVlbiBkZXN0cm95ZWQuICovXG4gIHByaXZhdGUgX2Rlc3Ryb3llZCA9IG5ldyBTdWJqZWN0PHZvaWQ+KCk7XG5cbiAgLyoqIFN1YnNjcmlwdGlvbiB0byBmb2N1cyBjaGFuZ2VzIGluIHRoZSBjaGlwcy4gKi9cbiAgcHJpdmF0ZSBfY2hpcEZvY3VzU3Vic2NyaXB0aW9uOiBTdWJzY3JpcHRpb24gfCBudWxsO1xuXG4gIC8qKiBTdWJzY3JpcHRpb24gdG8gYmx1ciBjaGFuZ2VzIGluIHRoZSBjaGlwcy4gKi9cbiAgcHJpdmF0ZSBfY2hpcEJsdXJTdWJzY3JpcHRpb246IFN1YnNjcmlwdGlvbiB8IG51bGw7XG5cbiAgLyoqIFN1YnNjcmlwdGlvbiB0byBzZWxlY3Rpb24gY2hhbmdlcyBpbiBjaGlwcy4gKi9cbiAgcHJpdmF0ZSBfY2hpcFNlbGVjdGlvblN1YnNjcmlwdGlvbjogU3Vic2NyaXB0aW9uIHwgbnVsbDtcblxuICAvKiogU3Vic2NyaXB0aW9uIHRvIHJlbW92ZSBjaGFuZ2VzIGluIGNoaXBzLiAqL1xuICBwcml2YXRlIF9jaGlwUmVtb3ZlU3Vic2NyaXB0aW9uOiBTdWJzY3JpcHRpb24gfCBudWxsO1xuXG4gIC8qKiBUaGUgY2hpcCBpbnB1dCB0byBhZGQgbW9yZSBjaGlwcyAqL1xuICBwcm90ZWN0ZWQgX2NoaXBJbnB1dDogTm92b0NoaXBUZXh0Q29udHJvbDtcblxuICAvKiogVWlkIG9mIHRoZSBjaGlwIGxpc3QgKi9cbiAgX3VpZDogc3RyaW5nID0gYG5vdm8tY2hpcC1saXN0LSR7bmV4dFVuaXF1ZUlkKyt9YDtcblxuICAvKiogVGhlIGFyaWEtZGVzY3JpYmVkYnkgYXR0cmlidXRlIG9uIHRoZSBjaGlwIGxpc3QgZm9yIGltcHJvdmVkIGExMXkuICovXG4gIF9hcmlhRGVzY3JpYmVkYnk6IHN0cmluZztcblxuICAvKiogVGFiIGluZGV4IGZvciB0aGUgY2hpcCBsaXN0LiAqL1xuICBfdGFiSW5kZXggPSAwO1xuXG4gIC8qKlxuICAgKiBVc2VyIGRlZmluZWQgdGFiIGluZGV4LlxuICAgKiBXaGVuIGl0IGlzIG5vdCBudWxsLCB1c2UgdXNlciBkZWZpbmVkIHRhYiBpbmRleC4gT3RoZXJ3aXNlIHVzZSBfdGFiSW5kZXhcbiAgICovXG4gIF91c2VyVGFiSW5kZXg6IG51bWJlciB8IG51bGwgPSBudWxsO1xuXG4gIC8qKiBUaGUgRm9jdXNLZXlNYW5hZ2VyIHdoaWNoIGhhbmRsZXMgZm9jdXMuICovXG4gIF9rZXlNYW5hZ2VyOiBGb2N1c0tleU1hbmFnZXI8Tm92b0NoaXBFbGVtZW50PjtcblxuICAvKiogRnVuY3Rpb24gd2hlbiB0b3VjaGVkICovXG4gIF9vblRvdWNoZWQgPSAoKSA9PiB7fTtcblxuICAvKiogRnVuY3Rpb24gd2hlbiBjaGFuZ2VkICovXG4gIF9vbkNoYW5nZTogKHZhbHVlOiBhbnkpID0+IHZvaWQgPSAoKSA9PiB7fTtcblxuICBfc2VsZWN0aW9uTW9kZWw6IFNlbGVjdGlvbk1vZGVsPE5vdm9DaGlwRWxlbWVudD47XG5cbiAgLyoqIFRoZSBhcnJheSBvZiBzZWxlY3RlZCBjaGlwcyBpbnNpZGUgY2hpcCBsaXN0LiAqL1xuICBnZXQgc2VsZWN0ZWQoKTogTm92b0NoaXBFbGVtZW50W10gfCBOb3ZvQ2hpcEVsZW1lbnQge1xuICAgIHJldHVybiB0aGlzLm11bHRpcGxlID8gdGhpcy5fc2VsZWN0aW9uTW9kZWwuc2VsZWN0ZWQgOiB0aGlzLl9zZWxlY3Rpb25Nb2RlbC5zZWxlY3RlZFswXTtcbiAgfVxuXG4gIC8qKiBUaGUgQVJJQSByb2xlIGFwcGxpZWQgdG8gdGhlIGNoaXAgbGlzdC4gKi9cbiAgZ2V0IHJvbGUoKTogc3RyaW5nIHwgbnVsbCB7XG4gICAgcmV0dXJuIHRoaXMuZW1wdHkgPyBudWxsIDogJ2xpc3Rib3gnO1xuICB9XG5cbiAgLyoqIEFuIG9iamVjdCB1c2VkIHRvIGNvbnRyb2wgd2hlbiBlcnJvciBtZXNzYWdlcyBhcmUgc2hvd24uICovXG4gIEBJbnB1dCgpIGVycm9yU3RhdGVNYXRjaGVyOiBFcnJvclN0YXRlTWF0Y2hlcjtcblxuICAvKiogV2hldGhlciB0aGUgdXNlciBzaG91bGQgYmUgYWxsb3dlZCB0byBzZWxlY3QgbXVsdGlwbGUgY2hpcHMuICovXG4gIEBJbnB1dCgpXG4gIGdldCBtdWx0aXBsZSgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5fbXVsdGlwbGU7XG4gIH1cbiAgc2V0IG11bHRpcGxlKHZhbHVlOiBib29sZWFuKSB7XG4gICAgdGhpcy5fbXVsdGlwbGUgPSBjb2VyY2VCb29sZWFuUHJvcGVydHkodmFsdWUpO1xuICAgIHRoaXMuX3N5bmNDaGlwc1N0YXRlKCk7XG4gIH1cbiAgcHJpdmF0ZSBfbXVsdGlwbGU6IGJvb2xlYW4gPSBmYWxzZTtcblxuICAvKiogV2hldGhlciB0aGUgY2hpcHMgc2hvdWxkIGFwcGVhciBzdGFja2VkIGluc3RlYWQgb2YgYSByb3cuICovXG4gIEBJbnB1dCgpXG4gIGdldCBzdGFja2VkKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLl9zdGFja2VkO1xuICB9XG4gIHNldCBzdGFja2VkKHZhbHVlOiBib29sZWFuKSB7XG4gICAgdGhpcy5fc3RhY2tlZCA9IGNvZXJjZUJvb2xlYW5Qcm9wZXJ0eSh2YWx1ZSk7XG4gIH1cbiAgcHJpdmF0ZSBfc3RhY2tlZDogYm9vbGVhbiA9IGZhbHNlO1xuXG4gIC8qKlxuICAgKiBBIGZ1bmN0aW9uIHRvIGNvbXBhcmUgdGhlIG9wdGlvbiB2YWx1ZXMgd2l0aCB0aGUgc2VsZWN0ZWQgdmFsdWVzLiBUaGUgZmlyc3QgYXJndW1lbnRcbiAgICogaXMgYSB2YWx1ZSBmcm9tIGFuIG9wdGlvbi4gVGhlIHNlY29uZCBpcyBhIHZhbHVlIGZyb20gdGhlIHNlbGVjdGlvbi4gQSBib29sZWFuXG4gICAqIHNob3VsZCBiZSByZXR1cm5lZC5cbiAgICovXG4gIEBJbnB1dCgpXG4gIGdldCBjb21wYXJlV2l0aCgpOiAobzE6IGFueSwgbzI6IGFueSkgPT4gYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuX2NvbXBhcmVXaXRoO1xuICB9XG4gIHNldCBjb21wYXJlV2l0aChmbjogKG8xOiBhbnksIG8yOiBhbnkpID0+IGJvb2xlYW4pIHtcbiAgICB0aGlzLl9jb21wYXJlV2l0aCA9IGZuO1xuICAgIGlmICh0aGlzLl9zZWxlY3Rpb25Nb2RlbCkge1xuICAgICAgLy8gQSBkaWZmZXJlbnQgY29tcGFyYXRvciBtZWFucyB0aGUgc2VsZWN0aW9uIGNvdWxkIGNoYW5nZS5cbiAgICAgIHRoaXMuX2luaXRpYWxpemVTZWxlY3Rpb24oKTtcbiAgICB9XG4gIH1cbiAgcHJpdmF0ZSBfY29tcGFyZVdpdGggPSAobzE6IGFueSwgbzI6IGFueSkgPT4gbzEgPT09IG8yO1xuXG4gIC8qKlxuICAgKiBJbXBsZW1lbnRlZCBhcyBwYXJ0IG9mIE5vdm9GaWVsZENvbnRyb2wuXG4gICAqIEBkb2NzLXByaXZhdGVcbiAgICovXG4gIEBJbnB1dCgpXG4gIGdldCB2YWx1ZSgpOiBhbnkge1xuICAgIHJldHVybiB0aGlzLl92YWx1ZTtcbiAgfVxuICBzZXQgdmFsdWUodmFsdWU6IGFueSkge1xuICAgIHRoaXMud3JpdGVWYWx1ZSh2YWx1ZSk7XG4gICAgdGhpcy5fdmFsdWUgPSB2YWx1ZTtcbiAgfVxuICBwcm90ZWN0ZWQgX3ZhbHVlOiBhbnk7XG5cbiAgLyoqXG4gICAqIEltcGxlbWVudGVkIGFzIHBhcnQgb2YgTm92b0ZpZWxkQ29udHJvbC5cbiAgICogQGRvY3MtcHJpdmF0ZVxuICAgKi9cbiAgZ2V0IGlkKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHRoaXMuX2NoaXBJbnB1dCA/IHRoaXMuX2NoaXBJbnB1dC5pZCA6IHRoaXMuX3VpZDtcbiAgfVxuXG4gIC8qKlxuICAgKiBJbXBsZW1lbnRlZCBhcyBwYXJ0IG9mIE5vdm9GaWVsZENvbnRyb2wuXG4gICAqIEBkb2NzLXByaXZhdGVcbiAgICovXG4gIEBJbnB1dCgpXG4gIGdldCByZXF1aXJlZCgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5fcmVxdWlyZWQ7XG4gIH1cbiAgc2V0IHJlcXVpcmVkKHZhbHVlOiBib29sZWFuKSB7XG4gICAgdGhpcy5fcmVxdWlyZWQgPSBjb2VyY2VCb29sZWFuUHJvcGVydHkodmFsdWUpO1xuICAgIHRoaXMuc3RhdGVDaGFuZ2VzLm5leHQoKTtcbiAgfVxuICBwcm90ZWN0ZWQgX3JlcXVpcmVkOiBib29sZWFuID0gZmFsc2U7XG5cbiAgLyoqXG4gICAqIEltcGxlbWVudGVkIGFzIHBhcnQgb2YgTm92b0ZpZWxkQ29udHJvbC5cbiAgICogQGRvY3MtcHJpdmF0ZVxuICAgKi9cbiAgQElucHV0KClcbiAgZ2V0IHBsYWNlaG9sZGVyKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHRoaXMuX2NoaXBJbnB1dCA/IHRoaXMuX2NoaXBJbnB1dC5wbGFjZWhvbGRlciA6IHRoaXMuX3BsYWNlaG9sZGVyO1xuICB9XG4gIHNldCBwbGFjZWhvbGRlcih2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fcGxhY2Vob2xkZXIgPSB2YWx1ZTtcbiAgICB0aGlzLnN0YXRlQ2hhbmdlcy5uZXh0KCk7XG4gIH1cbiAgcHJvdGVjdGVkIF9wbGFjZWhvbGRlcjogc3RyaW5nO1xuXG4gIC8qKiBXaGV0aGVyIGFueSBjaGlwcyBvciB0aGUgbWF0Q2hpcElucHV0IGluc2lkZSBvZiB0aGlzIGNoaXAtbGlzdCBoYXMgZm9jdXMuICovXG4gIGdldCBmb2N1c2VkKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiAodGhpcy5fY2hpcElucHV0ICYmIHRoaXMuX2NoaXBJbnB1dC5mb2N1c2VkKSB8fCB0aGlzLl9oYXNGb2N1c2VkQ2hpcCgpO1xuICB9XG5cbiAgLyoqXG4gICAqIEltcGxlbWVudGVkIGFzIHBhcnQgb2YgTm92b0ZpZWxkQ29udHJvbC5cbiAgICogQGRvY3MtcHJpdmF0ZVxuICAgKi9cbiAgZ2V0IGVtcHR5KCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiAoIXRoaXMuX2NoaXBJbnB1dCB8fCB0aGlzLl9jaGlwSW5wdXQuZW1wdHkpICYmICghdGhpcy5jaGlwcyB8fCB0aGlzLmNoaXBzLmxlbmd0aCA9PT0gMCk7XG4gIH1cblxuICAvKipcbiAgICogSW1wbGVtZW50ZWQgYXMgcGFydCBvZiBOb3ZvRmllbGRDb250cm9sLlxuICAgKiBAZG9jcy1wcml2YXRlXG4gICAqL1xuICBnZXQgc2hvdWxkTGFiZWxGbG9hdCgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gIXRoaXMuZW1wdHkgfHwgdGhpcy5mb2N1c2VkO1xuICB9XG5cbiAgLyoqXG4gICAqIEltcGxlbWVudGVkIGFzIHBhcnQgb2YgTm92b0ZpZWxkQ29udHJvbC5cbiAgICogQGRvY3MtcHJpdmF0ZVxuICAgKi9cbiAgQElucHV0KClcbiAgZ2V0IGRpc2FibGVkKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLm5nQ29udHJvbCA/ICEhdGhpcy5uZ0NvbnRyb2wuZGlzYWJsZWQgOiB0aGlzLl9kaXNhYmxlZDtcbiAgfVxuICBzZXQgZGlzYWJsZWQodmFsdWU6IGJvb2xlYW4pIHtcbiAgICB0aGlzLl9kaXNhYmxlZCA9IGNvZXJjZUJvb2xlYW5Qcm9wZXJ0eSh2YWx1ZSk7XG4gICAgdGhpcy5fc3luY0NoaXBzU3RhdGUoKTtcbiAgfVxuICBwcm90ZWN0ZWQgX2Rpc2FibGVkOiBib29sZWFuID0gZmFsc2U7XG5cbiAgLyoqIE9yaWVudGF0aW9uIG9mIHRoZSBjaGlwIGxpc3QuICovXG4gIEBJbnB1dCgnYXJpYS1vcmllbnRhdGlvbicpIGFyaWFPcmllbnRhdGlvbjogJ2hvcml6b250YWwnIHwgJ3ZlcnRpY2FsJyA9ICdob3Jpem9udGFsJztcblxuICAvKipcbiAgICogV2hldGhlciBvciBub3QgdGhpcyBjaGlwIGxpc3QgaXMgc2VsZWN0YWJsZS4gV2hlbiBhIGNoaXAgbGlzdCBpcyBub3Qgc2VsZWN0YWJsZSxcbiAgICogdGhlIHNlbGVjdGVkIHN0YXRlcyBmb3IgYWxsIHRoZSBjaGlwcyBpbnNpZGUgdGhlIGNoaXAgbGlzdCBhcmUgYWx3YXlzIGlnbm9yZWQuXG4gICAqL1xuICBASW5wdXQoKVxuICBnZXQgc2VsZWN0YWJsZSgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5fc2VsZWN0YWJsZTtcbiAgfVxuICBzZXQgc2VsZWN0YWJsZSh2YWx1ZTogYm9vbGVhbikge1xuICAgIHRoaXMuX3NlbGVjdGFibGUgPSBjb2VyY2VCb29sZWFuUHJvcGVydHkodmFsdWUpO1xuXG4gICAgaWYgKHRoaXMuY2hpcHMpIHtcbiAgICAgIHRoaXMuY2hpcHMuZm9yRWFjaCgoY2hpcCkgPT4gKGNoaXAuY2hpcExpc3RTZWxlY3RhYmxlID0gdGhpcy5fc2VsZWN0YWJsZSkpO1xuICAgIH1cbiAgfVxuICBwcm90ZWN0ZWQgX3NlbGVjdGFibGU6IGJvb2xlYW4gPSB0cnVlO1xuXG4gIEBJbnB1dCgpXG4gIHNldCB0YWJJbmRleCh2YWx1ZTogbnVtYmVyKSB7XG4gICAgdGhpcy5fdXNlclRhYkluZGV4ID0gdmFsdWU7XG4gICAgdGhpcy5fdGFiSW5kZXggPSB2YWx1ZTtcbiAgfVxuXG4gIC8qKiBDb21iaW5lZCBzdHJlYW0gb2YgYWxsIG9mIHRoZSBjaGlsZCBjaGlwcycgc2VsZWN0aW9uIGNoYW5nZSBldmVudHMuICovXG4gIGdldCBjaGlwU2VsZWN0aW9uQ2hhbmdlcygpOiBPYnNlcnZhYmxlPE5vdm9DaGlwU2VsZWN0aW9uQ2hhbmdlPiB7XG4gICAgcmV0dXJuIG1lcmdlKC4uLnRoaXMuY2hpcHMubWFwKChjaGlwKSA9PiBjaGlwLnNlbGVjdGlvbkNoYW5nZSkpO1xuICB9XG5cbiAgLyoqIENvbWJpbmVkIHN0cmVhbSBvZiBhbGwgb2YgdGhlIGNoaWxkIGNoaXBzJyBmb2N1cyBjaGFuZ2UgZXZlbnRzLiAqL1xuICBnZXQgY2hpcEZvY3VzQ2hhbmdlcygpOiBPYnNlcnZhYmxlPE5vdm9DaGlwRXZlbnQ+IHtcbiAgICByZXR1cm4gbWVyZ2UoLi4udGhpcy5jaGlwcy5tYXAoKGNoaXApID0+IGNoaXAuX29uRm9jdXMpKTtcbiAgfVxuXG4gIC8qKiBDb21iaW5lZCBzdHJlYW0gb2YgYWxsIG9mIHRoZSBjaGlsZCBjaGlwcycgYmx1ciBjaGFuZ2UgZXZlbnRzLiAqL1xuICBnZXQgY2hpcEJsdXJDaGFuZ2VzKCk6IE9ic2VydmFibGU8Tm92b0NoaXBFdmVudD4ge1xuICAgIHJldHVybiBtZXJnZSguLi50aGlzLmNoaXBzLm1hcCgoY2hpcCkgPT4gY2hpcC5fb25CbHVyKSk7XG4gIH1cblxuICAvKiogQ29tYmluZWQgc3RyZWFtIG9mIGFsbCBvZiB0aGUgY2hpbGQgY2hpcHMnIHJlbW92ZSBjaGFuZ2UgZXZlbnRzLiAqL1xuICBnZXQgY2hpcFJlbW92ZUNoYW5nZXMoKTogT2JzZXJ2YWJsZTxOb3ZvQ2hpcEV2ZW50PiB7XG4gICAgcmV0dXJuIG1lcmdlKC4uLnRoaXMuY2hpcHMubWFwKChjaGlwKSA9PiBjaGlwLmRlc3Ryb3llZCkpO1xuICB9XG5cbiAgLyoqIEV2ZW50IGVtaXR0ZWQgd2hlbiB0aGUgc2VsZWN0ZWQgY2hpcCBsaXN0IHZhbHVlIGhhcyBiZWVuIGNoYW5nZWQgYnkgdGhlIHVzZXIuICovXG4gIEBPdXRwdXQoKSByZWFkb25seSBjaGFuZ2U6IEV2ZW50RW1pdHRlcjxOb3ZvQ2hpcExpc3RDaGFuZ2U+ID0gbmV3IEV2ZW50RW1pdHRlcjxOb3ZvQ2hpcExpc3RDaGFuZ2U+KCk7XG5cbiAgLyoqXG4gICAqIEV2ZW50IHRoYXQgZW1pdHMgd2hlbmV2ZXIgdGhlIHJhdyB2YWx1ZSBvZiB0aGUgY2hpcC1saXN0IGNoYW5nZXMuIFRoaXMgaXMgaGVyZSBwcmltYXJpbHlcbiAgICogdG8gZmFjaWxpdGF0ZSB0aGUgdHdvLXdheSBiaW5kaW5nIGZvciB0aGUgYHZhbHVlYCBpbnB1dC5cbiAgICogQGRvY3MtcHJpdmF0ZVxuICAgKi9cbiAgQE91dHB1dCgpIHJlYWRvbmx5IHZhbHVlQ2hhbmdlOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xuXG4gIC8qKiBUaGUgY2hpcCBjb21wb25lbnRzIGNvbnRhaW5lZCB3aXRoaW4gdGhpcyBjaGlwIGxpc3QuICovXG4gIEBDb250ZW50Q2hpbGRyZW4oTm92b0NoaXBFbGVtZW50LCB7XG4gICAgLy8gV2UgbmVlZCB0byB1c2UgYGRlc2NlbmRhbnRzOiB0cnVlYCwgYmVjYXVzZSBJdnkgd2lsbCBubyBsb25nZXIgbWF0Y2hcbiAgICAvLyBpbmRpcmVjdCBkZXNjZW5kYW50cyBpZiBpdCdzIGxlZnQgYXMgZmFsc2UuXG4gICAgZGVzY2VuZGFudHM6IHRydWUsXG4gIH0pXG4gIGNoaXBzOiBRdWVyeUxpc3Q8Tm92b0NoaXBFbGVtZW50PjtcblxuICAvKiogQGRvY3MtcHJpdmF0ZSBJbXBsZW1lbnRlZCBhcyBwYXJ0IG9mIE5vdm9GaWVsZENvbnRyb2wuICovXG4gIGxhc3RLZXlWYWx1ZTogc3RyaW5nID0gbnVsbDtcbiAgLyoqIEBkb2NzLXByaXZhdGUgSW1wbGVtZW50ZWQgYXMgcGFydCBvZiBOb3ZvRmllbGRDb250cm9sLiovXG4gIGxhc3RDYXJldFBvc2l0aW9uOiBudW1iZXIgfCBudWxsO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByb3RlY3RlZCBfZWxlbWVudFJlZjogRWxlbWVudFJlZjxIVE1MRWxlbWVudD4sXG4gICAgcHJpdmF0ZSBfY2hhbmdlRGV0ZWN0b3JSZWY6IENoYW5nZURldGVjdG9yUmVmLFxuICAgIEBPcHRpb25hbCgpIHByaXZhdGUgX2RpcjogRGlyZWN0aW9uYWxpdHksXG4gICAgQE9wdGlvbmFsKCkgX3BhcmVudEZvcm06IE5nRm9ybSxcbiAgICBAT3B0aW9uYWwoKSBfcGFyZW50Rm9ybUdyb3VwOiBGb3JtR3JvdXBEaXJlY3RpdmUsXG4gICAgX2RlZmF1bHRFcnJvclN0YXRlTWF0Y2hlcjogRXJyb3JTdGF0ZU1hdGNoZXIsXG4gICAgLyoqIEBkb2NzLXByaXZhdGUgKi9cbiAgICBAT3B0aW9uYWwoKSBAU2VsZigpIHB1YmxpYyBuZ0NvbnRyb2w6IE5nQ29udHJvbCxcbiAgKSB7XG4gICAgc3VwZXIoX2RlZmF1bHRFcnJvclN0YXRlTWF0Y2hlciwgX3BhcmVudEZvcm0sIF9wYXJlbnRGb3JtR3JvdXAsIG5nQ29udHJvbCk7XG4gICAgaWYgKHRoaXMubmdDb250cm9sKSB7XG4gICAgICB0aGlzLm5nQ29udHJvbC52YWx1ZUFjY2Vzc29yID0gdGhpcztcbiAgICB9XG4gIH1cblxuICBuZ0FmdGVyQ29udGVudEluaXQoKSB7XG4gICAgdGhpcy5fa2V5TWFuYWdlciA9IG5ldyBGb2N1c0tleU1hbmFnZXI8Tm92b0NoaXBFbGVtZW50Pih0aGlzLmNoaXBzKVxuICAgICAgLndpdGhXcmFwKClcbiAgICAgIC53aXRoVmVydGljYWxPcmllbnRhdGlvbigpXG4gICAgICAud2l0aEhvbWVBbmRFbmQoKVxuICAgICAgLndpdGhIb3Jpem9udGFsT3JpZW50YXRpb24odGhpcy5fZGlyID8gdGhpcy5fZGlyLnZhbHVlIDogJ2x0cicpO1xuXG4gICAgaWYgKHRoaXMuX2Rpcikge1xuICAgICAgdGhpcy5fZGlyLmNoYW5nZS5waXBlKHRha2VVbnRpbCh0aGlzLl9kZXN0cm95ZWQpKS5zdWJzY3JpYmUoKGRpcikgPT4gdGhpcy5fa2V5TWFuYWdlci53aXRoSG9yaXpvbnRhbE9yaWVudGF0aW9uKGRpcikpO1xuICAgIH1cblxuICAgIHRoaXMuX2tleU1hbmFnZXIudGFiT3V0LnBpcGUodGFrZVVudGlsKHRoaXMuX2Rlc3Ryb3llZCkpLnN1YnNjcmliZSgoKSA9PiB7XG4gICAgICB0aGlzLl9hbGxvd0ZvY3VzRXNjYXBlKCk7XG4gICAgfSk7XG5cbiAgICAvLyBXaGVuIHRoZSBsaXN0IGNoYW5nZXMsIHJlLXN1YnNjcmliZVxuICAgIHRoaXMuY2hpcHMuY2hhbmdlcy5waXBlKHN0YXJ0V2l0aChudWxsKSwgdGFrZVVudGlsKHRoaXMuX2Rlc3Ryb3llZCkpLnN1YnNjcmliZSgoKSA9PiB7XG4gICAgICBpZiAodGhpcy5kaXNhYmxlZCkge1xuICAgICAgICAvLyBTaW5jZSB0aGlzIGhhcHBlbnMgYWZ0ZXIgdGhlIGNvbnRlbnQgaGFzIGJlZW5cbiAgICAgICAgLy8gY2hlY2tlZCwgd2UgbmVlZCB0byBkZWZlciBpdCB0byB0aGUgbmV4dCB0aWNrLlxuICAgICAgICBQcm9taXNlLnJlc29sdmUoKS50aGVuKCgpID0+IHtcbiAgICAgICAgICB0aGlzLl9zeW5jQ2hpcHNTdGF0ZSgpO1xuICAgICAgICB9KTtcbiAgICAgIH1cblxuICAgICAgdGhpcy5fcmVzZXRDaGlwcygpO1xuXG4gICAgICAvLyBSZXNldCBjaGlwcyBzZWxlY3RlZC9kZXNlbGVjdGVkIHN0YXR1c1xuICAgICAgdGhpcy5faW5pdGlhbGl6ZVNlbGVjdGlvbigpO1xuXG4gICAgICAvLyBDaGVjayB0byBzZWUgaWYgd2UgbmVlZCB0byB1cGRhdGUgb3VyIHRhYiBpbmRleFxuICAgICAgdGhpcy5fdXBkYXRlVGFiSW5kZXgoKTtcblxuICAgICAgLy8gQ2hlY2sgdG8gc2VlIGlmIHdlIGhhdmUgYSBkZXN0cm95ZWQgY2hpcCBhbmQgbmVlZCB0byByZWZvY3VzXG4gICAgICB0aGlzLl91cGRhdGVGb2N1c0ZvckRlc3Ryb3llZENoaXBzKCk7XG5cbiAgICAgIHRoaXMuc3RhdGVDaGFuZ2VzLm5leHQoKTtcbiAgICB9KTtcbiAgfVxuXG4gIG5nT25Jbml0KCkge1xuICAgIHRoaXMuX3NlbGVjdGlvbk1vZGVsID0gbmV3IFNlbGVjdGlvbk1vZGVsPE5vdm9DaGlwRWxlbWVudD4odGhpcy5tdWx0aXBsZSwgdW5kZWZpbmVkLCBmYWxzZSk7XG4gICAgdGhpcy5zdGF0ZUNoYW5nZXMubmV4dCgpO1xuICB9XG5cbiAgbmdEb0NoZWNrKCkge1xuICAgIGlmICh0aGlzLm5nQ29udHJvbCkge1xuICAgICAgLy8gV2UgbmVlZCB0byByZS1ldmFsdWF0ZSB0aGlzIG9uIGV2ZXJ5IGNoYW5nZSBkZXRlY3Rpb24gY3ljbGUsIGJlY2F1c2UgdGhlcmUgYXJlIHNvbWVcbiAgICAgIC8vIGVycm9yIHRyaWdnZXJzIHRoYXQgd2UgY2FuJ3Qgc3Vic2NyaWJlIHRvIChlLmcuIHBhcmVudCBmb3JtIHN1Ym1pc3Npb25zKS4gVGhpcyBtZWFuc1xuICAgICAgLy8gdGhhdCB3aGF0ZXZlciBsb2dpYyBpcyBpbiBoZXJlIGhhcyB0byBiZSBzdXBlciBsZWFuIG9yIHdlIHJpc2sgZGVzdHJveWluZyB0aGUgcGVyZm9ybWFuY2UuXG4gICAgICB0aGlzLnVwZGF0ZUVycm9yU3RhdGUoKTtcblxuICAgICAgaWYgKHRoaXMubmdDb250cm9sLmRpc2FibGVkICE9PSB0aGlzLl9kaXNhYmxlZCkge1xuICAgICAgICB0aGlzLmRpc2FibGVkID0gISF0aGlzLm5nQ29udHJvbC5kaXNhYmxlZDtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBuZ09uRGVzdHJveSgpIHtcbiAgICB0aGlzLl9kZXN0cm95ZWQubmV4dCgpO1xuICAgIHRoaXMuX2Rlc3Ryb3llZC5jb21wbGV0ZSgpO1xuICAgIHRoaXMuc3RhdGVDaGFuZ2VzLmNvbXBsZXRlKCk7XG5cbiAgICB0aGlzLl9kcm9wU3Vic2NyaXB0aW9ucygpO1xuICB9XG5cbiAgLyoqIEFzc29jaWF0ZXMgYW4gSFRNTCBpbnB1dCBlbGVtZW50IHdpdGggdGhpcyBjaGlwIGxpc3QuICovXG4gIHJlZ2lzdGVySW5wdXQoaW5wdXRFbGVtZW50OiBOb3ZvQ2hpcFRleHRDb250cm9sKTogdm9pZCB7XG4gICAgdGhpcy5fY2hpcElucHV0ID0gaW5wdXRFbGVtZW50O1xuXG4gICAgLy8gV2UgdXNlIHRoaXMgYXR0cmlidXRlIHRvIG1hdGNoIHRoZSBjaGlwIGxpc3QgdG8gaXRzIGlucHV0IGluIHRlc3QgaGFybmVzc2VzLlxuICAgIC8vIFNldCB0aGUgYXR0cmlidXRlIGRpcmVjdGx5IGhlcmUgdG8gYXZvaWQgXCJjaGFuZ2VkIGFmdGVyIGNoZWNrZWRcIiBlcnJvcnMuXG4gICAgdGhpcy5fZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LnNldEF0dHJpYnV0ZSgnZGF0YS1ub3ZvLWNoaXAtaW5wdXQnLCBpbnB1dEVsZW1lbnQuaWQpO1xuICB9XG5cbiAgLyoqXG4gICAqIEltcGxlbWVudGVkIGFzIHBhcnQgb2YgTm92b0ZpZWxkQ29udHJvbC5cbiAgICogQGRvY3MtcHJpdmF0ZVxuICAgKi9cbiAgc2V0RGVzY3JpYmVkQnlJZHMoaWRzOiBzdHJpbmdbXSkge1xuICAgIHRoaXMuX2FyaWFEZXNjcmliZWRieSA9IGlkcy5qb2luKCcgJyk7XG4gIH1cblxuICAvLyBJbXBsZW1lbnRlZCBhcyBwYXJ0IG9mIENvbnRyb2xWYWx1ZUFjY2Vzc29yLlxuICB3cml0ZVZhbHVlKHZhbHVlOiBhbnkpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5jaGlwcykge1xuICAgICAgdGhpcy5fc2V0U2VsZWN0aW9uQnlWYWx1ZSh2YWx1ZSwgZmFsc2UpO1xuICAgIH1cbiAgfVxuXG4gIC8vIEltcGxlbWVudGVkIGFzIHBhcnQgb2YgQ29udHJvbFZhbHVlQWNjZXNzb3IuXG4gIHJlZ2lzdGVyT25DaGFuZ2UoZm46ICh2YWx1ZTogYW55KSA9PiB2b2lkKTogdm9pZCB7XG4gICAgdGhpcy5fb25DaGFuZ2UgPSBmbjtcbiAgfVxuXG4gIC8vIEltcGxlbWVudGVkIGFzIHBhcnQgb2YgQ29udHJvbFZhbHVlQWNjZXNzb3IuXG4gIHJlZ2lzdGVyT25Ub3VjaGVkKGZuOiAoKSA9PiB2b2lkKTogdm9pZCB7XG4gICAgdGhpcy5fb25Ub3VjaGVkID0gZm47XG4gIH1cblxuICAvLyBJbXBsZW1lbnRlZCBhcyBwYXJ0IG9mIENvbnRyb2xWYWx1ZUFjY2Vzc29yLlxuICBzZXREaXNhYmxlZFN0YXRlKGlzRGlzYWJsZWQ6IGJvb2xlYW4pOiB2b2lkIHtcbiAgICB0aGlzLmRpc2FibGVkID0gaXNEaXNhYmxlZDtcbiAgICB0aGlzLnN0YXRlQ2hhbmdlcy5uZXh0KCk7XG4gIH1cblxuICAvKipcbiAgICogSW1wbGVtZW50ZWQgYXMgcGFydCBvZiBOb3ZvRmllbGRDb250cm9sLlxuICAgKiBAZG9jcy1wcml2YXRlXG4gICAqL1xuICBvbkNvbnRhaW5lckNsaWNrKGV2ZW50OiBNb3VzZUV2ZW50KSB7XG4gICAgaWYgKCF0aGlzLl9vcmlnaW5hdGVzRnJvbUNoaXAoZXZlbnQpKSB7XG4gICAgICB0aGlzLmZvY3VzKCk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIEZvY3VzZXMgdGhlIGZpcnN0IG5vbi1kaXNhYmxlZCBjaGlwIGluIHRoaXMgY2hpcCBsaXN0LCBvciB0aGUgYXNzb2NpYXRlZCBpbnB1dCB3aGVuIHRoZXJlXG4gICAqIGFyZSBubyBlbGlnaWJsZSBjaGlwcy5cbiAgICovXG4gIGZvY3VzKG9wdGlvbnM/OiBGb2N1c09wdGlvbnMpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5kaXNhYmxlZCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIC8vIFRPRE86IEFSSUEgc2F5cyB0aGlzIHNob3VsZCBmb2N1cyB0aGUgZmlyc3QgYHNlbGVjdGVkYCBjaGlwIGlmIGFueSBhcmUgc2VsZWN0ZWQuXG4gICAgLy8gRm9jdXMgb24gZmlyc3QgZWxlbWVudCBpZiB0aGVyZSdzIG5vIGNoaXBJbnB1dCBpbnNpZGUgY2hpcC1saXN0XG4gICAgaWYgKHRoaXMuX2NoaXBJbnB1dCAmJiB0aGlzLl9jaGlwSW5wdXQuZm9jdXNlZCkge1xuICAgICAgLy8gZG8gbm90aGluZ1xuICAgIH0gZWxzZSBpZiAodGhpcy5fY2hpcElucHV0KSB7XG4gICAgICB0aGlzLl9mb2N1c0lucHV0KG9wdGlvbnMpO1xuICAgICAgdGhpcy5zdGF0ZUNoYW5nZXMubmV4dCgpO1xuICAgIH0gZWxzZSBpZiAodGhpcy5jaGlwcy5sZW5ndGggPiAwKSB7XG4gICAgICB0aGlzLl9rZXlNYW5hZ2VyLnNldEZpcnN0SXRlbUFjdGl2ZSgpO1xuICAgICAgdGhpcy5zdGF0ZUNoYW5nZXMubmV4dCgpO1xuICAgIH1cbiAgfVxuXG4gIC8qKiBBdHRlbXB0IHRvIGZvY3VzIGFuIGlucHV0IGlmIHdlIGhhdmUgb25lLiAqL1xuICBfZm9jdXNJbnB1dChvcHRpb25zPzogRm9jdXNPcHRpb25zKSB7XG4gICAgaWYgKHRoaXMuX2NoaXBJbnB1dCkge1xuICAgICAgdGhpcy5fY2hpcElucHV0LmZvY3VzKG9wdGlvbnMpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBQYXNzIGV2ZW50cyB0byB0aGUga2V5Ym9hcmQgbWFuYWdlci4gQXZhaWxhYmxlIGhlcmUgZm9yIHRlc3RzLlxuICAgKi9cbiAgX2tleWRvd24oZXZlbnQ6IEtleWJvYXJkRXZlbnQpIHtcbiAgICBjb25zdCB0YXJnZXQgPSBldmVudC50YXJnZXQgYXMgSFRNTEVsZW1lbnQ7XG5cbiAgICAvLyBJZiB0aGV5IGFyZSBvbiBhbiBlbXB0eSBpbnB1dCBhbmQgaGl0IGJhY2tzcGFjZSwgZm9jdXMgdGhlIGxhc3QgY2hpcFxuICAgIGlmIChldmVudC5rZXkgPT09IEtleS5CYWNrc3BhY2UgJiYgdGhpcy5faXNJbnB1dEVtcHR5KHRhcmdldCkpIHtcbiAgICAgIHRoaXMuX2tleU1hbmFnZXIuc2V0TGFzdEl0ZW1BY3RpdmUoKTtcbiAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgfSBlbHNlIGlmICh0YXJnZXQgJiYgdGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucygnbm92by1jaGlwJykpIHtcbiAgICAgIHRoaXMuX2tleU1hbmFnZXIub25LZXlkb3duKGV2ZW50KTtcbiAgICAgIHRoaXMuc3RhdGVDaGFuZ2VzLm5leHQoKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogQ2hlY2sgdGhlIHRhYiBpbmRleCBhcyB5b3Ugc2hvdWxkIG5vdCBiZSBhbGxvd2VkIHRvIGZvY3VzIGFuIGVtcHR5IGxpc3QuXG4gICAqL1xuICBwcm90ZWN0ZWQgX3VwZGF0ZVRhYkluZGV4KCk6IHZvaWQge1xuICAgIC8vIElmIHdlIGhhdmUgMCBjaGlwcywgd2Ugc2hvdWxkIG5vdCBhbGxvdyBrZXlib2FyZCBmb2N1c1xuICAgIHRoaXMuX3RhYkluZGV4ID0gdGhpcy5fdXNlclRhYkluZGV4IHx8ICh0aGlzLmNoaXBzLmxlbmd0aCA9PT0gMCA/IC0xIDogMCk7XG4gIH1cblxuICAvKipcbiAgICogSWYgdGhlIGFtb3VudCBvZiBjaGlwcyBjaGFuZ2VkLCB3ZSBuZWVkIHRvIHVwZGF0ZSB0aGVcbiAgICoga2V5IG1hbmFnZXIgc3RhdGUgYW5kIGZvY3VzIHRoZSBuZXh0IGNsb3Nlc3QgY2hpcC5cbiAgICovXG4gIHByb3RlY3RlZCBfdXBkYXRlRm9jdXNGb3JEZXN0cm95ZWRDaGlwcygpIHtcbiAgICAvLyBNb3ZlIGZvY3VzIHRvIHRoZSBjbG9zZXN0IGNoaXAuIElmIG5vIG90aGVyIGNoaXBzIHJlbWFpbiwgZm9jdXMgdGhlIGNoaXAtbGlzdCBpdHNlbGYuXG4gICAgaWYgKHRoaXMuX2xhc3REZXN0cm95ZWRDaGlwSW5kZXggIT0gbnVsbCkge1xuICAgICAgaWYgKHRoaXMuY2hpcHMubGVuZ3RoKSB7XG4gICAgICAgIGNvbnN0IG5ld0NoaXBJbmRleCA9IE1hdGgubWluKHRoaXMuX2xhc3REZXN0cm95ZWRDaGlwSW5kZXgsIHRoaXMuY2hpcHMubGVuZ3RoIC0gMSk7XG4gICAgICAgIHRoaXMuX2tleU1hbmFnZXIuc2V0QWN0aXZlSXRlbShuZXdDaGlwSW5kZXgpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5mb2N1cygpO1xuICAgICAgfVxuICAgIH1cblxuICAgIHRoaXMuX2xhc3REZXN0cm95ZWRDaGlwSW5kZXggPSBudWxsO1xuICB9XG5cbiAgLyoqXG4gICAqIFV0aWxpdHkgdG8gZW5zdXJlIGFsbCBpbmRleGVzIGFyZSB2YWxpZC5cbiAgICpcbiAgICogQHBhcmFtIGluZGV4IFRoZSBpbmRleCB0byBiZSBjaGVja2VkLlxuICAgKiBAcmV0dXJucyBUcnVlIGlmIHRoZSBpbmRleCBpcyB2YWxpZCBmb3Igb3VyIGxpc3Qgb2YgY2hpcHMuXG4gICAqL1xuICBwcml2YXRlIF9pc1ZhbGlkSW5kZXgoaW5kZXg6IG51bWJlcik6IGJvb2xlYW4ge1xuICAgIHJldHVybiBpbmRleCA+PSAwICYmIGluZGV4IDwgdGhpcy5jaGlwcy5sZW5ndGg7XG4gIH1cblxuICBwcml2YXRlIF9pc0lucHV0RW1wdHkoZWxlbWVudDogSFRNTEVsZW1lbnQpOiBib29sZWFuIHtcbiAgICBpZiAoZWxlbWVudCAmJiBlbGVtZW50Lm5vZGVOYW1lLnRvTG93ZXJDYXNlKCkgPT09ICdpbnB1dCcpIHtcbiAgICAgIGxldCBpbnB1dCA9IGVsZW1lbnQgYXMgSFRNTElucHV0RWxlbWVudDtcbiAgICAgIHJldHVybiAhaW5wdXQudmFsdWU7XG4gICAgfVxuXG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgX3NldFNlbGVjdGlvbkJ5VmFsdWUodmFsdWU6IGFueSwgaXNVc2VySW5wdXQ6IGJvb2xlYW4gPSB0cnVlKSB7XG4gICAgdGhpcy5fY2xlYXJTZWxlY3Rpb24oKTtcbiAgICB0aGlzLmNoaXBzLmZvckVhY2goKGNoaXApID0+IGNoaXAuZGVzZWxlY3QoKSk7XG5cbiAgICBpZiAoQXJyYXkuaXNBcnJheSh2YWx1ZSkpIHtcbiAgICAgIHZhbHVlLmZvckVhY2goKGN1cnJlbnRWYWx1ZSkgPT4gdGhpcy5fc2VsZWN0VmFsdWUoY3VycmVudFZhbHVlLCBpc1VzZXJJbnB1dCkpO1xuICAgICAgdGhpcy5fc29ydFZhbHVlcygpO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCBjb3JyZXNwb25kaW5nQ2hpcCA9IHRoaXMuX3NlbGVjdFZhbHVlKHZhbHVlLCBpc1VzZXJJbnB1dCk7XG5cbiAgICAgIC8vIFNoaWZ0IGZvY3VzIHRvIHRoZSBhY3RpdmUgaXRlbS4gTm90ZSB0aGF0IHdlIHNob3VsZG4ndCBkbyB0aGlzIGluIG11bHRpcGxlXG4gICAgICAvLyBtb2RlLCBiZWNhdXNlIHdlIGRvbid0IGtub3cgd2hhdCBjaGlwIHRoZSB1c2VyIGludGVyYWN0ZWQgd2l0aCBsYXN0LlxuICAgICAgaWYgKGNvcnJlc3BvbmRpbmdDaGlwKSB7XG4gICAgICAgIGlmIChpc1VzZXJJbnB1dCkge1xuICAgICAgICAgIHRoaXMuX2tleU1hbmFnZXIuc2V0QWN0aXZlSXRlbShjb3JyZXNwb25kaW5nQ2hpcCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogRmluZHMgYW5kIHNlbGVjdHMgdGhlIGNoaXAgYmFzZWQgb24gaXRzIHZhbHVlLlxuICAgKiBAcmV0dXJucyBDaGlwIHRoYXQgaGFzIHRoZSBjb3JyZXNwb25kaW5nIHZhbHVlLlxuICAgKi9cbiAgcHJpdmF0ZSBfc2VsZWN0VmFsdWUodmFsdWU6IGFueSwgaXNVc2VySW5wdXQ6IGJvb2xlYW4gPSB0cnVlKTogTm92b0NoaXBFbGVtZW50IHwgdW5kZWZpbmVkIHtcbiAgICBjb25zdCBjb3JyZXNwb25kaW5nQ2hpcCA9IHRoaXMuY2hpcHMuZmluZCgoY2hpcCkgPT4ge1xuICAgICAgcmV0dXJuIGNoaXAudmFsdWUgIT0gbnVsbCAmJiB0aGlzLl9jb21wYXJlV2l0aChjaGlwLnZhbHVlLCB2YWx1ZSk7XG4gICAgfSk7XG5cbiAgICBpZiAoY29ycmVzcG9uZGluZ0NoaXApIHtcbiAgICAgIGlzVXNlcklucHV0ID8gY29ycmVzcG9uZGluZ0NoaXAuc2VsZWN0VmlhSW50ZXJhY3Rpb24oKSA6IGNvcnJlc3BvbmRpbmdDaGlwLnNlbGVjdCgpO1xuICAgICAgdGhpcy5fc2VsZWN0aW9uTW9kZWwuc2VsZWN0KGNvcnJlc3BvbmRpbmdDaGlwKTtcbiAgICB9XG5cbiAgICByZXR1cm4gY29ycmVzcG9uZGluZ0NoaXA7XG4gIH1cblxuICBwcml2YXRlIF9pbml0aWFsaXplU2VsZWN0aW9uKCk6IHZvaWQge1xuICAgIC8vIERlZmVyIHNldHRpbmcgdGhlIHZhbHVlIGluIG9yZGVyIHRvIGF2b2lkIHRoZSBcIkV4cHJlc3Npb25cbiAgICAvLyBoYXMgY2hhbmdlZCBhZnRlciBpdCB3YXMgY2hlY2tlZFwiIGVycm9ycyBmcm9tIEFuZ3VsYXIuXG4gICAgUHJvbWlzZS5yZXNvbHZlKCkudGhlbigoKSA9PiB7XG4gICAgICBpZiAodGhpcy5uZ0NvbnRyb2wgfHwgdGhpcy5fdmFsdWUpIHtcbiAgICAgICAgdGhpcy5fc2V0U2VsZWN0aW9uQnlWYWx1ZSh0aGlzLm5nQ29udHJvbCA/IHRoaXMubmdDb250cm9sLnZhbHVlIDogdGhpcy5fdmFsdWUsIGZhbHNlKTtcbiAgICAgICAgdGhpcy5zdGF0ZUNoYW5nZXMubmV4dCgpO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIERlc2VsZWN0cyBldmVyeSBjaGlwIGluIHRoZSBsaXN0LlxuICAgKiBAcGFyYW0gc2tpcCBDaGlwIHRoYXQgc2hvdWxkIG5vdCBiZSBkZXNlbGVjdGVkLlxuICAgKi9cbiAgcHJpdmF0ZSBfY2xlYXJTZWxlY3Rpb24oc2tpcD86IE5vdm9DaGlwRWxlbWVudCk6IHZvaWQge1xuICAgIHRoaXMuX3NlbGVjdGlvbk1vZGVsLmNsZWFyKCk7XG4gICAgdGhpcy5jaGlwcy5mb3JFYWNoKChjaGlwKSA9PiB7XG4gICAgICBpZiAoY2hpcCAhPT0gc2tpcCkge1xuICAgICAgICBjaGlwLmRlc2VsZWN0KCk7XG4gICAgICB9XG4gICAgfSk7XG4gICAgdGhpcy5zdGF0ZUNoYW5nZXMubmV4dCgpO1xuICB9XG5cbiAgLyoqXG4gICAqIFNvcnRzIHRoZSBtb2RlbCB2YWx1ZXMsIGVuc3VyaW5nIHRoYXQgdGhleSBrZWVwIHRoZSBzYW1lXG4gICAqIG9yZGVyIHRoYXQgdGhleSBoYXZlIGluIHRoZSBwYW5lbC5cbiAgICovXG4gIHByaXZhdGUgX3NvcnRWYWx1ZXMoKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuX211bHRpcGxlKSB7XG4gICAgICB0aGlzLl9zZWxlY3Rpb25Nb2RlbC5jbGVhcigpO1xuXG4gICAgICB0aGlzLmNoaXBzLmZvckVhY2goKGNoaXApID0+IHtcbiAgICAgICAgaWYgKGNoaXAuc2VsZWN0ZWQpIHtcbiAgICAgICAgICB0aGlzLl9zZWxlY3Rpb25Nb2RlbC5zZWxlY3QoY2hpcCk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgICAgdGhpcy5zdGF0ZUNoYW5nZXMubmV4dCgpO1xuICAgIH1cbiAgfVxuXG4gIC8qKiBFbWl0cyBjaGFuZ2UgZXZlbnQgdG8gc2V0IHRoZSBtb2RlbCB2YWx1ZS4gKi9cbiAgcHJpdmF0ZSBfcHJvcGFnYXRlQ2hhbmdlcyhmYWxsYmFja1ZhbHVlPzogYW55KTogdm9pZCB7XG4gICAgbGV0IHZhbHVlVG9FbWl0OiBhbnkgPSBudWxsO1xuXG4gICAgaWYgKEFycmF5LmlzQXJyYXkodGhpcy5zZWxlY3RlZCkpIHtcbiAgICAgIHZhbHVlVG9FbWl0ID0gdGhpcy5zZWxlY3RlZC5tYXAoKGNoaXApID0+IGNoaXAudmFsdWUpO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YWx1ZVRvRW1pdCA9IHRoaXMuc2VsZWN0ZWQgPyB0aGlzLnNlbGVjdGVkLnZhbHVlIDogZmFsbGJhY2tWYWx1ZTtcbiAgICB9XG4gICAgdGhpcy5fdmFsdWUgPSB2YWx1ZVRvRW1pdDtcbiAgICB0aGlzLmNoYW5nZS5lbWl0KG5ldyBOb3ZvQ2hpcExpc3RDaGFuZ2UodGhpcywgdmFsdWVUb0VtaXQpKTtcbiAgICB0aGlzLnZhbHVlQ2hhbmdlLmVtaXQodmFsdWVUb0VtaXQpO1xuICAgIHRoaXMuX29uQ2hhbmdlKHZhbHVlVG9FbWl0KTtcbiAgICB0aGlzLl9jaGFuZ2VEZXRlY3RvclJlZi5tYXJrRm9yQ2hlY2soKTtcbiAgfVxuXG4gIC8qKiBXaGVuIGJsdXJyZWQsIG1hcmsgdGhlIGZpZWxkIGFzIHRvdWNoZWQgd2hlbiBmb2N1cyBtb3ZlZCBvdXRzaWRlIHRoZSBjaGlwIGxpc3QuICovXG4gIF9ibHVyKCkge1xuICAgIGlmICghdGhpcy5faGFzRm9jdXNlZENoaXAoKSkge1xuICAgICAgdGhpcy5fa2V5TWFuYWdlci5zZXRBY3RpdmVJdGVtKC0xKTtcbiAgICB9XG5cbiAgICBpZiAoIXRoaXMuZGlzYWJsZWQpIHtcbiAgICAgIGlmICh0aGlzLl9jaGlwSW5wdXQpIHtcbiAgICAgICAgLy8gSWYgdGhlcmUncyBhIGNoaXAgaW5wdXQsIHdlIHNob3VsZCBjaGVjayB3aGV0aGVyIHRoZSBmb2N1cyBtb3ZlZCB0byBjaGlwIGlucHV0LlxuICAgICAgICAvLyBJZiB0aGUgZm9jdXMgaXMgbm90IG1vdmVkIHRvIGNoaXAgaW5wdXQsIG1hcmsgdGhlIGZpZWxkIGFzIHRvdWNoZWQuIElmIHRoZSBmb2N1cyBtb3ZlZFxuICAgICAgICAvLyB0byBjaGlwIGlucHV0LCBkbyBub3RoaW5nLlxuICAgICAgICAvLyBUaW1lb3V0IGlzIG5lZWRlZCB0byB3YWl0IGZvciB0aGUgZm9jdXMoKSBldmVudCB0cmlnZ2VyIG9uIGNoaXAgaW5wdXQuXG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgIGlmICghdGhpcy5mb2N1c2VkKSB7XG4gICAgICAgICAgICB0aGlzLl9tYXJrQXNUb3VjaGVkKCk7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIElmIHRoZXJlJ3Mgbm8gY2hpcCBpbnB1dCwgdGhlbiBtYXJrIHRoZSBmaWVsZCBhcyB0b3VjaGVkLlxuICAgICAgICB0aGlzLl9tYXJrQXNUb3VjaGVkKCk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLyoqIE1hcmsgdGhlIGZpZWxkIGFzIHRvdWNoZWQgKi9cbiAgX21hcmtBc1RvdWNoZWQoKSB7XG4gICAgdGhpcy5fb25Ub3VjaGVkKCk7XG4gICAgdGhpcy5fY2hhbmdlRGV0ZWN0b3JSZWYubWFya0ZvckNoZWNrKCk7XG4gICAgdGhpcy5zdGF0ZUNoYW5nZXMubmV4dCgpO1xuICB9XG5cbiAgLyoqXG4gICAqIFJlbW92ZXMgdGhlIGB0YWJpbmRleGAgZnJvbSB0aGUgY2hpcCBsaXN0IGFuZCByZXNldHMgaXQgYmFjayBhZnRlcndhcmRzLCBhbGxvd2luZyB0aGVcbiAgICogdXNlciB0byB0YWIgb3V0IG9mIGl0LiBUaGlzIHByZXZlbnRzIHRoZSBsaXN0IGZyb20gY2FwdHVyaW5nIGZvY3VzIGFuZCByZWRpcmVjdGluZ1xuICAgKiBpdCBiYWNrIHRvIHRoZSBmaXJzdCBjaGlwLCBjcmVhdGluZyBhIGZvY3VzIHRyYXAsIGlmIGl0IHVzZXIgdHJpZXMgdG8gdGFiIGF3YXkuXG4gICAqL1xuICBfYWxsb3dGb2N1c0VzY2FwZSgpIHtcbiAgICBpZiAodGhpcy5fdGFiSW5kZXggIT09IC0xKSB7XG4gICAgICB0aGlzLl90YWJJbmRleCA9IC0xO1xuXG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgdGhpcy5fdGFiSW5kZXggPSB0aGlzLl91c2VyVGFiSW5kZXggfHwgMDtcbiAgICAgICAgdGhpcy5fY2hhbmdlRGV0ZWN0b3JSZWYubWFya0ZvckNoZWNrKCk7XG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIF9yZXNldENoaXBzKCkge1xuICAgIHRoaXMuX2Ryb3BTdWJzY3JpcHRpb25zKCk7XG4gICAgdGhpcy5fbGlzdGVuVG9DaGlwc0ZvY3VzKCk7XG4gICAgdGhpcy5fbGlzdGVuVG9DaGlwc1NlbGVjdGlvbigpO1xuICAgIHRoaXMuX2xpc3RlblRvQ2hpcHNSZW1vdmVkKCk7XG4gIH1cblxuICBwcml2YXRlIF9kcm9wU3Vic2NyaXB0aW9ucygpIHtcbiAgICBpZiAodGhpcy5fY2hpcEZvY3VzU3Vic2NyaXB0aW9uKSB7XG4gICAgICB0aGlzLl9jaGlwRm9jdXNTdWJzY3JpcHRpb24udW5zdWJzY3JpYmUoKTtcbiAgICAgIHRoaXMuX2NoaXBGb2N1c1N1YnNjcmlwdGlvbiA9IG51bGw7XG4gICAgfVxuXG4gICAgaWYgKHRoaXMuX2NoaXBCbHVyU3Vic2NyaXB0aW9uKSB7XG4gICAgICB0aGlzLl9jaGlwQmx1clN1YnNjcmlwdGlvbi51bnN1YnNjcmliZSgpO1xuICAgICAgdGhpcy5fY2hpcEJsdXJTdWJzY3JpcHRpb24gPSBudWxsO1xuICAgIH1cblxuICAgIGlmICh0aGlzLl9jaGlwU2VsZWN0aW9uU3Vic2NyaXB0aW9uKSB7XG4gICAgICB0aGlzLl9jaGlwU2VsZWN0aW9uU3Vic2NyaXB0aW9uLnVuc3Vic2NyaWJlKCk7XG4gICAgICB0aGlzLl9jaGlwU2VsZWN0aW9uU3Vic2NyaXB0aW9uID0gbnVsbDtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5fY2hpcFJlbW92ZVN1YnNjcmlwdGlvbikge1xuICAgICAgdGhpcy5fY2hpcFJlbW92ZVN1YnNjcmlwdGlvbi51bnN1YnNjcmliZSgpO1xuICAgICAgdGhpcy5fY2hpcFJlbW92ZVN1YnNjcmlwdGlvbiA9IG51bGw7XG4gICAgfVxuICB9XG5cbiAgLyoqIExpc3RlbnMgdG8gdXNlci1nZW5lcmF0ZWQgc2VsZWN0aW9uIGV2ZW50cyBvbiBlYWNoIGNoaXAuICovXG4gIHByaXZhdGUgX2xpc3RlblRvQ2hpcHNTZWxlY3Rpb24oKTogdm9pZCB7XG4gICAgdGhpcy5fY2hpcFNlbGVjdGlvblN1YnNjcmlwdGlvbiA9IHRoaXMuY2hpcFNlbGVjdGlvbkNoYW5nZXMuc3Vic2NyaWJlKChldmVudCkgPT4ge1xuICAgICAgZXZlbnQuc291cmNlLnNlbGVjdGVkID8gdGhpcy5fc2VsZWN0aW9uTW9kZWwuc2VsZWN0KGV2ZW50LnNvdXJjZSkgOiB0aGlzLl9zZWxlY3Rpb25Nb2RlbC5kZXNlbGVjdChldmVudC5zb3VyY2UpO1xuXG4gICAgICAvLyBGb3Igc2luZ2xlIHNlbGVjdGlvbiBjaGlwIGxpc3QsIG1ha2Ugc3VyZSB0aGUgZGVzZWxlY3RlZCB2YWx1ZSBpcyB1bnNlbGVjdGVkLlxuICAgICAgaWYgKCF0aGlzLm11bHRpcGxlKSB7XG4gICAgICAgIHRoaXMuY2hpcHMuZm9yRWFjaCgoY2hpcCkgPT4ge1xuICAgICAgICAgIGlmICghdGhpcy5fc2VsZWN0aW9uTW9kZWwuaXNTZWxlY3RlZChjaGlwKSAmJiBjaGlwLnNlbGVjdGVkKSB7XG4gICAgICAgICAgICBjaGlwLmRlc2VsZWN0KCk7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgIH1cblxuICAgICAgaWYgKGV2ZW50LmlzVXNlcklucHV0KSB7XG4gICAgICAgIHRoaXMuX3Byb3BhZ2F0ZUNoYW5nZXMoKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIC8qKiBMaXN0ZW5zIHRvIHVzZXItZ2VuZXJhdGVkIHNlbGVjdGlvbiBldmVudHMgb24gZWFjaCBjaGlwLiAqL1xuICBwcml2YXRlIF9saXN0ZW5Ub0NoaXBzRm9jdXMoKTogdm9pZCB7XG4gICAgdGhpcy5fY2hpcEZvY3VzU3Vic2NyaXB0aW9uID0gdGhpcy5jaGlwRm9jdXNDaGFuZ2VzLnN1YnNjcmliZSgoZXZlbnQpID0+IHtcbiAgICAgIGxldCBjaGlwSW5kZXg6IG51bWJlciA9IHRoaXMuY2hpcHMudG9BcnJheSgpLmluZGV4T2YoZXZlbnQuY2hpcCk7XG5cbiAgICAgIGlmICh0aGlzLl9pc1ZhbGlkSW5kZXgoY2hpcEluZGV4KSkge1xuICAgICAgICB0aGlzLl9rZXlNYW5hZ2VyLnVwZGF0ZUFjdGl2ZUl0ZW0oY2hpcEluZGV4KTtcbiAgICAgIH1cbiAgICAgIHRoaXMuc3RhdGVDaGFuZ2VzLm5leHQoKTtcbiAgICB9KTtcblxuICAgIHRoaXMuX2NoaXBCbHVyU3Vic2NyaXB0aW9uID0gdGhpcy5jaGlwQmx1ckNoYW5nZXMuc3Vic2NyaWJlKCgpID0+IHtcbiAgICAgIHRoaXMuX2JsdXIoKTtcbiAgICAgIHRoaXMuc3RhdGVDaGFuZ2VzLm5leHQoKTtcbiAgICB9KTtcbiAgfVxuXG4gIHByaXZhdGUgX2xpc3RlblRvQ2hpcHNSZW1vdmVkKCk6IHZvaWQge1xuICAgIHRoaXMuX2NoaXBSZW1vdmVTdWJzY3JpcHRpb24gPSB0aGlzLmNoaXBSZW1vdmVDaGFuZ2VzLnN1YnNjcmliZSgoZXZlbnQpID0+IHtcbiAgICAgIGNvbnN0IGNoaXAgPSBldmVudC5jaGlwO1xuICAgICAgY29uc3QgY2hpcEluZGV4ID0gdGhpcy5jaGlwcy50b0FycmF5KCkuaW5kZXhPZihldmVudC5jaGlwKTtcblxuICAgICAgLy8gSW4gY2FzZSB0aGUgY2hpcCB0aGF0IHdpbGwgYmUgcmVtb3ZlZCBpcyBjdXJyZW50bHkgZm9jdXNlZCwgd2UgdGVtcG9yYXJpbHkgc3RvcmVcbiAgICAgIC8vIHRoZSBpbmRleCBpbiBvcmRlciB0byBiZSBhYmxlIHRvIGRldGVybWluZSBhbiBhcHByb3ByaWF0ZSBzaWJsaW5nIGNoaXAgdGhhdCB3aWxsXG4gICAgICAvLyByZWNlaXZlIGZvY3VzLlxuICAgICAgaWYgKHRoaXMuX2lzVmFsaWRJbmRleChjaGlwSW5kZXgpICYmIGNoaXAuX2hhc0ZvY3VzKSB7XG4gICAgICAgIHRoaXMuX2xhc3REZXN0cm95ZWRDaGlwSW5kZXggPSBjaGlwSW5kZXg7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICAvKiogQ2hlY2tzIHdoZXRoZXIgYW4gZXZlbnQgY29tZXMgZnJvbSBpbnNpZGUgYSBjaGlwIGVsZW1lbnQuICovXG4gIHByaXZhdGUgX29yaWdpbmF0ZXNGcm9tQ2hpcChldmVudDogRXZlbnQpOiBib29sZWFuIHtcbiAgICBsZXQgY3VycmVudEVsZW1lbnQgPSBldmVudC50YXJnZXQgYXMgSFRNTEVsZW1lbnQgfCBudWxsO1xuXG4gICAgd2hpbGUgKGN1cnJlbnRFbGVtZW50ICYmIGN1cnJlbnRFbGVtZW50ICE9PSB0aGlzLl9lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQpIHtcbiAgICAgIGlmIChjdXJyZW50RWxlbWVudC5jbGFzc0xpc3QuY29udGFpbnMoJ25vdm8tY2hpcCcpKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuXG4gICAgICBjdXJyZW50RWxlbWVudCA9IGN1cnJlbnRFbGVtZW50LnBhcmVudEVsZW1lbnQ7XG4gICAgfVxuXG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgLyoqIENoZWNrcyB3aGV0aGVyIGFueSBvZiB0aGUgY2hpcHMgaXMgZm9jdXNlZC4gKi9cbiAgcHJpdmF0ZSBfaGFzRm9jdXNlZENoaXAoKSB7XG4gICAgcmV0dXJuIHRoaXMuY2hpcHMgJiYgdGhpcy5jaGlwcy5zb21lKChjaGlwKSA9PiBjaGlwLl9oYXNGb2N1cyk7XG4gIH1cblxuICAvKiogU3luY3MgdGhlIGxpc3QncyBzdGF0ZSB3aXRoIHRoZSBpbmRpdmlkdWFsIGNoaXBzLiAqL1xuICBwcml2YXRlIF9zeW5jQ2hpcHNTdGF0ZSgpIHtcbiAgICBpZiAodGhpcy5jaGlwcykge1xuICAgICAgdGhpcy5jaGlwcy5mb3JFYWNoKChjaGlwKSA9PiB7XG4gICAgICAgIGNoaXAuX2NoaXBMaXN0RGlzYWJsZWQgPSB0aGlzLl9kaXNhYmxlZDtcbiAgICAgICAgY2hpcC5fY2hpcExpc3RNdWx0aXBsZSA9IHRoaXMubXVsdGlwbGU7XG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICBzdGF0aWMgbmdBY2NlcHRJbnB1dFR5cGVfbXVsdGlwbGU6IEJvb2xlYW5JbnB1dDtcbiAgc3RhdGljIG5nQWNjZXB0SW5wdXRUeXBlX3JlcXVpcmVkOiBCb29sZWFuSW5wdXQ7XG4gIHN0YXRpYyBuZ0FjY2VwdElucHV0VHlwZV9kaXNhYmxlZDogQm9vbGVhbklucHV0O1xuICBzdGF0aWMgbmdBY2NlcHRJbnB1dFR5cGVfc2VsZWN0YWJsZTogQm9vbGVhbklucHV0O1xufVxuIl19