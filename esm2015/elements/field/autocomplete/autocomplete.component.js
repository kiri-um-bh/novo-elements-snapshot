import { ActiveDescendantKeyManager } from '@angular/cdk/a11y';
import { coerceBooleanProperty } from '@angular/cdk/coercion';
import { hasModifierKey } from '@angular/cdk/keycodes';
import { Attribute, ChangeDetectionStrategy, ChangeDetectorRef, Component, ContentChildren, ElementRef, EventEmitter, Inject, Input, Optional, Output, QueryList, ViewChild, ViewEncapsulation, } from '@angular/core';
import { fromEvent, merge, of, Subscription } from 'rxjs';
import { take } from 'rxjs/operators';
import { mixinDisabled, mixinOverlay, NovoOptgroup, NovoOption, NOVO_OPTION_PARENT_COMPONENT, } from '../../common';
import { NovoOverlayTemplateComponent } from '../../common/overlay';
import { NovoFieldElement, NOVO_FORM_FIELD } from '../field';
import * as i0 from "@angular/core";
import * as i1 from "../field";
import * as i2 from "../../common/overlay/Overlay";
import * as i3 from "@angular/cdk/scrolling";
const _c0 = ["*"];
/** Event object that is emitted when an autocomplete option is selected. */
export class NovoOptionSelectedEvent {
    constructor(
    /** Reference to the autocomplete panel that emitted the event. */
    source, 
    /** Option that was selected. */
    option) {
        this.source = source;
        this.option = option;
    }
}
// Boilerplate for applying mixins
class NovoAutocompleteBase {
    constructor() { }
}
const NovoAutocompleteMixins = mixinOverlay(mixinDisabled(NovoAutocompleteBase));
export class NovoAutocompleteElement extends NovoAutocompleteMixins {
    constructor(_elementRef, cdr, defaultTabIndex, _formField) {
        super();
        this._elementRef = _elementRef;
        this.cdr = cdr;
        this._formField = _formField;
        this._stateChanges = Subscription.EMPTY;
        this._activeOptionChanges = Subscription.EMPTY;
        this._selectedOptionChanges = Subscription.EMPTY;
        this._keyDownChanges = Subscription.EMPTY;
        /** Event that is emitted whenever an option from the list is selected. */
        this.optionSelected = new EventEmitter();
        /** Emits whenever an option is activated using the keyboard. */
        this.optionActivated = new EventEmitter();
        /** Key to use to trigger autocomplete. used for textarea. */
        this.triggerOn = (control) => control.focused;
        /** Function that maps an option's control value to its display value in the trigger. */
        this.displayWith = null;
        this._multiple = false;
        const parsedTabIndex = Number(defaultTabIndex);
        this.tabIndex = parsedTabIndex || parsedTabIndex === 0 ? parsedTabIndex : null;
    }
    /** Whether the user should be allowed to select multiple options. */
    get multiple() {
        var _a, _b;
        return this._multiple || !!((_a = this._formField._control) === null || _a === void 0 ? void 0 : _a.multiple) || ((_b = this._formField._control) === null || _b === void 0 ? void 0 : _b.controlType) === 'chip-list';
    }
    set multiple(value) {
        this._multiple = coerceBooleanProperty(value);
    }
    /** Whether the toggle button is disabled. */
    get disabled() {
        var _a;
        if (this._disabled === undefined && ((_a = this._formField) === null || _a === void 0 ? void 0 : _a._control)) {
            return this._formField._control.disabled;
        }
        return !!this._disabled;
    }
    set disabled(value) {
        this._disabled = coerceBooleanProperty(value);
    }
    ngOnChanges(changes) {
        this._watchStateChanges();
        this._watchSelectionEvents();
    }
    ngOnDestroy() {
        this._stateChanges.unsubscribe();
        this._activeOptionChanges.unsubscribe();
        this._selectedOptionChanges.unsubscribe();
        this._keyDownChanges.unsubscribe();
    }
    ngAfterContentInit() {
        this._keyManager = new ActiveDescendantKeyManager(this.options).withWrap();
        this._activeOptionChanges = this._keyManager.change.subscribe((index) => {
            this.optionActivated.emit({ source: this, option: this.options.toArray()[index] || null });
        });
        this.element = this._formField.getConnectedOverlayOrigin() || this._elementRef;
        this._keyDownChanges = fromEvent(this.element.nativeElement, 'keydown').subscribe((event) => this._handleKeydown(event));
        this.options.changes.subscribe(() => {
            this._watchStateChanges();
            this._watchSelectionEvents();
        });
    }
    ngAfterViewInit() {
        this._watchStateChanges();
        this._watchSelectionEvents();
    }
    checkPanel() {
        const isTriggered = this.triggerOn(this._formField._control);
        console.log('Is Triggered', isTriggered);
        if (isTriggered && this.element) {
            this.openPanel();
        }
    }
    _setTriggerValue(value) {
        const toDisplay = this.displayWith ? this.displayWith(value) : value;
        // Simply falling back to an empty string if the display value is falsy does not work properly.
        // The display value can also be the number zero and shouldn't fall back to an empty string.
        const inputValue = toDisplay != null ? toDisplay : '';
        // If it's used within a `NovoField`, we should set it through the property so it can go
        // through change detection.
        if (this._formField) {
            const { controlType, lastCaretPosition = 0 } = this._formField._control;
            if (controlType === 'textarea') {
                const currentValue = this._formField._control.value.split('');
                currentValue.splice(lastCaretPosition, 0, inputValue);
                this._formField._control.value = currentValue.join('');
            }
            else {
                let valueToEmit = inputValue;
                if (this.multiple) {
                    console.log('Current Field', this._formField._control);
                    const currentValue = this._formField._control.value;
                    if (Array.isArray(currentValue)) {
                        valueToEmit = [...currentValue, inputValue];
                    }
                    else {
                        valueToEmit = [currentValue, inputValue];
                    }
                }
                this._formField._control.value = valueToEmit;
            }
        }
        else {
            // this._element.nativeElement.value = inputValue;
            console.warn(`AutoComplete only intended to be used within a NovoField`);
        }
        this._previousValue = inputValue;
    }
    /**
     * Clear any previous selected option and emit a selection change event for this option
     */
    _clearPreviousSelectedOption(skip) {
        this.options.forEach((option) => {
            if (option !== skip && option.selected) {
                option.deselect();
            }
        });
    }
    /** Emits the `select` event. */
    _emitSelectEvent(option) {
        const event = new NovoOptionSelectedEvent(this, option);
        this.optionSelected.emit(event);
    }
    /**
     * This method closes the panel, and if a value is specified, also sets the associated
     * control to that value. It will also mark the control as dirty if this interaction
     * stemmed from the user.
     */
    _setValueAndClose(event) {
        if (event && event.source) {
            this._clearPreviousSelectedOption(event.source);
            this._setTriggerValue(event.source.value);
            // this._onChange(event.source.value);
            // this._element.nativeElement.focus();
            this._formField._control.focus();
            this._emitSelectEvent(event.source);
            this._watchSelectionEvents();
        }
        this.closePanel();
    }
    _watchSelectionEvents() {
        const selectionEvents = this.options ? merge(...this.options.map((option) => option.onSelectionChange)) : of();
        this._selectedOptionChanges.unsubscribe();
        this._selectedOptionChanges = selectionEvents.pipe(take(1)).subscribe((evt) => {
            this._setValueAndClose(evt);
        });
    }
    _watchStateChanges() {
        const inputStateChanged = this._formField && this._formField._control ? this._formField._control.stateChanges : of();
        this._stateChanges.unsubscribe();
        this._stateChanges = merge(inputStateChanged).subscribe(() => {
            this.checkPanel();
            this.cdr.markForCheck();
        });
    }
    /** The currently active option, coerced to MatOption type. */
    get activeOption() {
        if (this._keyManager) {
            return this._keyManager.activeItem;
        }
        return null;
    }
    _handleKeydown(event) {
        const key = event.key;
        // Prevent the default action on all escape key presses. This is here primarily to bring IE
        // in line with other browsers. By default, pressing escape on IE will cause it to revert
        // the input value to the one that it had on focus, however it won't dispatch any events
        // which means that the model value will be out of sync with the view.
        if (key === "Escape" /* Escape */ && !hasModifierKey(event)) {
            event.preventDefault();
        }
        if (this.activeOption && key === "Enter" /* Enter */ && this.panelOpen) {
            this.activeOption._selectViaInteraction();
            // this._resetActiveItem();
            event.preventDefault();
        }
        else {
            const prevActiveItem = this._keyManager.activeItem;
            const isArrowKey = key === "ArrowUp" /* ArrowUp */ || key === "ArrowDown" /* ArrowDown */;
            if (this.panelOpen || key === "Tab" /* Tab */) {
                this._keyManager.onKeydown(event);
            }
            else if (isArrowKey && !this.overlay.panelOpen) {
                this.openPanel();
            }
            // if (isArrowKey || this.autocomplete._keyManager.activeItem !== prevActiveItem) {
            //   this._scrollToOption(this.autocomplete._keyManager.activeItemIndex || 0);
            // }
        }
    }
}
NovoAutocompleteElement.ɵfac = function NovoAutocompleteElement_Factory(t) { return new (t || NovoAutocompleteElement)(i0.ɵɵdirectiveInject(i0.ElementRef), i0.ɵɵdirectiveInject(i0.ChangeDetectorRef), i0.ɵɵinjectAttribute('tabindex'), i0.ɵɵdirectiveInject(NOVO_FORM_FIELD, 8)); };
NovoAutocompleteElement.ɵcmp = i0.ɵɵdefineComponent({ type: NovoAutocompleteElement, selectors: [["novo-autocomplete"]], contentQueries: function NovoAutocompleteElement_ContentQueries(rf, ctx, dirIndex) { if (rf & 1) {
        i0.ɵɵcontentQuery(dirIndex, NovoOptgroup, true);
        i0.ɵɵcontentQuery(dirIndex, NovoOption, true);
    } if (rf & 2) {
        var _t;
        i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.optionGroups = _t);
        i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.options = _t);
    } }, viewQuery: function NovoAutocompleteElement_Query(rf, ctx) { if (rf & 1) {
        i0.ɵɵviewQuery(NovoOverlayTemplateComponent, true);
    } if (rf & 2) {
        var _t;
        i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.overlay = _t.first);
    } }, hostAttrs: [1, "novo-autocomplete"], hostVars: 1, hostBindings: function NovoAutocompleteElement_HostBindings(rf, ctx) { if (rf & 2) {
        i0.ɵɵattribute("tabindex", ctx.disabled ? null : 0 - 1);
    } }, inputs: { tabIndex: "tabIndex", triggerOn: "triggerOn", displayWith: "displayWith", ariaLabel: ["aria-label", "ariaLabel"], multiple: "multiple", disabled: "disabled" }, outputs: { optionSelected: "optionSelected", optionActivated: "optionActivated" }, exportAs: ["novoAutocomplete"], features: [i0.ɵɵProvidersFeature([{ provide: NOVO_OPTION_PARENT_COMPONENT, useExisting: NovoAutocompleteElement }]), i0.ɵɵInheritDefinitionFeature, i0.ɵɵNgOnChangesFeature], ngContentSelectors: _c0, decls: 3, vars: 1, consts: [["position", "above-below", 3, "parent"], ["cdk-scrollable", "", 1, "novo-autocomplete-options"]], template: function NovoAutocompleteElement_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵprojectionDef();
        i0.ɵɵelementStart(0, "novo-overlay-template", 0);
        i0.ɵɵelementStart(1, "div", 1);
        i0.ɵɵprojection(2);
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵproperty("parent", ctx.element);
    } }, directives: [i2.NovoOverlayTemplateComponent, i3.CdkScrollable], styles: ["@-webkit-keyframes rotate{0%{transform:rotate(0deg)}75%{transform:rotate(200deg)}to{transform:rotate(180deg)}}@-webkit-keyframes half-rotate{0%{transform:rotate(45deg)}75%{transform:rotate(100deg)}to{transform:rotate(90deg)}}@-webkit-keyframes rotateBack{0%{transform:rotate(90deg)}to{transform:rotate(0deg)}}@-webkit-keyframes show{0%{opacity:0;transform:translateX(-100%)}75%{transform:translateX(0)}to{opacity:1;transform:translateX(0)}}@keyframes rotate{0%{transform:rotate(0deg)}75%{transform:rotate(200deg)}to{transform:rotate(180deg)}}@keyframes half-rotate{0%{transform:rotate(45deg)}75%{transform:rotate(100deg)}to{transform:rotate(90deg)}}@keyframes rotateBack{0%{transform:rotate(90deg)}to{transform:rotate(0deg)}}@keyframes show{0%{opacity:0;transform:translateX(-100%)}75%{transform:translateX(0)}to{opacity:1;transform:translateX(0)}}.novo-autocomplete-options{-webkit-padding-start:0!important;background-color:var(--background-alt);box-shadow:0 -1px 3px -2px rgba(0,0,0,.2),0 2px 2px 0 rgba(0,0,0,.14),0 1px 5px 0 rgba(0,0,0,.12);cursor:default;list-style:none;padding-inline-start:0!important}"], encapsulation: 2, changeDetection: 0 });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(NovoAutocompleteElement, [{
        type: Component,
        args: [{
                selector: 'novo-autocomplete',
                templateUrl: 'autocomplete.component.html',
                styleUrls: ['autocomplete.component.scss'],
                host: {
                    class: 'novo-autocomplete',
                    // Always set the tabindex to -1 so that it doesn't overlap with any custom tabindex the
                    // consumer may have provided, while still being able to receive focus.
                    '[attr.tabindex]': 'disabled ? null : -1',
                },
                providers: [{ provide: NOVO_OPTION_PARENT_COMPONENT, useExisting: NovoAutocompleteElement }],
                exportAs: 'novoAutocomplete',
                encapsulation: ViewEncapsulation.None,
                changeDetection: ChangeDetectionStrategy.OnPush,
            }]
    }], function () { return [{ type: i0.ElementRef }, { type: i0.ChangeDetectorRef }, { type: undefined, decorators: [{
                type: Attribute,
                args: ['tabindex']
            }] }, { type: i1.NovoFieldElement, decorators: [{
                type: Optional
            }, {
                type: Inject,
                args: [NOVO_FORM_FIELD]
            }] }]; }, { optionGroups: [{
            type: ContentChildren,
            args: [NovoOptgroup, { descendants: true }]
        }], options: [{
            type: ContentChildren,
            args: [NovoOption, { descendants: true }]
        }], optionSelected: [{
            type: Output
        }], optionActivated: [{
            type: Output
        }], tabIndex: [{
            type: Input
        }], triggerOn: [{
            type: Input
        }], displayWith: [{
            type: Input
        }], ariaLabel: [{
            type: Input,
            args: ['aria-label']
        }], multiple: [{
            type: Input
        }], disabled: [{
            type: Input
        }], overlay: [{
            type: ViewChild,
            args: [NovoOverlayTemplateComponent]
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXV0b2NvbXBsZXRlLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIvaG9tZS9ydW5uZXIvd29yay9ub3ZvLWVsZW1lbnRzL25vdm8tZWxlbWVudHMvcHJvamVjdHMvbm92by1lbGVtZW50cy9zcmMvIiwic291cmNlcyI6WyJlbGVtZW50cy9maWVsZC9hdXRvY29tcGxldGUvYXV0b2NvbXBsZXRlLmNvbXBvbmVudC50cyIsImVsZW1lbnRzL2ZpZWxkL2F1dG9jb21wbGV0ZS9hdXRvY29tcGxldGUuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLDBCQUEwQixFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFDL0QsT0FBTyxFQUFnQixxQkFBcUIsRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBQzVFLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQUN2RCxPQUFPLEVBR0wsU0FBUyxFQUNULHVCQUF1QixFQUN2QixpQkFBaUIsRUFDakIsU0FBUyxFQUNULGVBQWUsRUFDZixVQUFVLEVBQ1YsWUFBWSxFQUNaLE1BQU0sRUFDTixLQUFLLEVBR0wsUUFBUSxFQUNSLE1BQU0sRUFDTixTQUFTLEVBRVQsU0FBUyxFQUNULGlCQUFpQixHQUNsQixNQUFNLGVBQWUsQ0FBQztBQUV2QixPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxFQUFFLEVBQUUsWUFBWSxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQzFELE9BQU8sRUFBRSxJQUFJLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUN0QyxPQUFPLEVBSUwsYUFBYSxFQUNiLFlBQVksRUFDWixZQUFZLEVBQ1osVUFBVSxFQUVWLDRCQUE0QixHQUM3QixNQUFNLGNBQWMsQ0FBQztBQUN0QixPQUFPLEVBQUUsNEJBQTRCLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUNwRSxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsZUFBZSxFQUFFLE1BQU0sVUFBVSxDQUFDOzs7Ozs7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QVU7O3NCQUNwQixRQUFROztzQkFBSSxNQUFNO3VCQUFDLGVBQWU7d0JBckRpQixZQUFZO2tCQUFqRSxlQUFlO21CQUFDLFlBQVksRUFBRSxFQUFFLFdBQVcsRUFBRSxJQUFJLEVBQUU7WUFDQSxPQUFPO2tCQUExRCxlQUFlO21CQUFDLFVBQVUsRUFBRSxFQUFFLFdBQVcsRUFBRSxJQUFJLEVBQUU7WUFHL0IsY0FBYztrQkFBaEMsTUFBTTtZQUVZLGVBQWU7a0JBQWpDLE1BQU07WUFHRSxRQUFRO2tCQUFoQixLQUFLO1lBR0csU0FBUztrQkFBakIsS0FBSztZQUdHLFdBQVc7a0JBQW5CLEtBQUs7WUFHZSxTQUFTO2tCQUE3QixLQUFLO21CQUFDLFlBQVk7WUFJZixRQUFRO2tCQURYLEtBQUs7WUFXRixRQUFRO2tCQURYLEtBQUs7WUFjTixPQUFPO2tCQUROLFNBQVM7bUJBQUMsNEJBQTRCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQWN0aXZlRGVzY2VuZGFudEtleU1hbmFnZXIgfSBmcm9tICdAYW5ndWxhci9jZGsvYTExeSc7XG5pbXBvcnQgeyBCb29sZWFuSW5wdXQsIGNvZXJjZUJvb2xlYW5Qcm9wZXJ0eSB9IGZyb20gJ0Bhbmd1bGFyL2Nkay9jb2VyY2lvbic7XG5pbXBvcnQgeyBoYXNNb2RpZmllcktleSB9IGZyb20gJ0Bhbmd1bGFyL2Nkay9rZXljb2Rlcyc7XG5pbXBvcnQge1xuICBBZnRlckNvbnRlbnRJbml0LFxuICBBZnRlclZpZXdJbml0LFxuICBBdHRyaWJ1dGUsXG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxuICBDaGFuZ2VEZXRlY3RvclJlZixcbiAgQ29tcG9uZW50LFxuICBDb250ZW50Q2hpbGRyZW4sXG4gIEVsZW1lbnRSZWYsXG4gIEV2ZW50RW1pdHRlcixcbiAgSW5qZWN0LFxuICBJbnB1dCxcbiAgT25DaGFuZ2VzLFxuICBPbkRlc3Ryb3ksXG4gIE9wdGlvbmFsLFxuICBPdXRwdXQsXG4gIFF1ZXJ5TGlzdCxcbiAgU2ltcGxlQ2hhbmdlcyxcbiAgVmlld0NoaWxkLFxuICBWaWV3RW5jYXBzdWxhdGlvbixcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBLZXkgfSBmcm9tICdwcm9qZWN0cy9ub3ZvLWVsZW1lbnRzL3NyYy91dGlscyc7XG5pbXBvcnQgeyBmcm9tRXZlbnQsIG1lcmdlLCBvZiwgU3Vic2NyaXB0aW9uIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyB0YWtlIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHtcbiAgQ2FuRGlzYWJsZSxcbiAgQ2FuRGlzYWJsZUN0b3IsXG4gIEhhc092ZXJsYXlDdG9yLFxuICBtaXhpbkRpc2FibGVkLFxuICBtaXhpbk92ZXJsYXksXG4gIE5vdm9PcHRncm91cCxcbiAgTm92b09wdGlvbixcbiAgTm92b09wdGlvblNlbGVjdGlvbkNoYW5nZSxcbiAgTk9WT19PUFRJT05fUEFSRU5UX0NPTVBPTkVOVCxcbn0gZnJvbSAnLi4vLi4vY29tbW9uJztcbmltcG9ydCB7IE5vdm9PdmVybGF5VGVtcGxhdGVDb21wb25lbnQgfSBmcm9tICcuLi8uLi9jb21tb24vb3ZlcmxheSc7XG5pbXBvcnQgeyBOb3ZvRmllbGRFbGVtZW50LCBOT1ZPX0ZPUk1fRklFTEQgfSBmcm9tICcuLi9maWVsZCc7XG5pbXBvcnQgeyBOb3ZvRmllbGRDb250cm9sIH0gZnJvbSAnLi4vZmllbGQtY29udHJvbCc7XG5cbi8qKiBFdmVudCBvYmplY3QgdGhhdCBpcyBlbWl0dGVkIHdoZW4gYW4gYXV0b2NvbXBsZXRlIG9wdGlvbiBpcyBzZWxlY3RlZC4gKi9cbmV4cG9ydCBjbGFzcyBOb3ZvT3B0aW9uU2VsZWN0ZWRFdmVudCB7XG4gIGNvbnN0cnVjdG9yKFxuICAgIC8qKiBSZWZlcmVuY2UgdG8gdGhlIGF1dG9jb21wbGV0ZSBwYW5lbCB0aGF0IGVtaXR0ZWQgdGhlIGV2ZW50LiAqL1xuICAgIHB1YmxpYyBzb3VyY2U6IE5vdm9BdXRvY29tcGxldGVFbGVtZW50LFxuICAgIC8qKiBPcHRpb24gdGhhdCB3YXMgc2VsZWN0ZWQuICovXG4gICAgcHVibGljIG9wdGlvbjogTm92b09wdGlvbixcbiAgKSB7fVxufVxuXG4vLyBCb2lsZXJwbGF0ZSBmb3IgYXBwbHlpbmcgbWl4aW5zXG5jbGFzcyBOb3ZvQXV0b2NvbXBsZXRlQmFzZSB7XG4gIGNvbnN0cnVjdG9yKCkge31cbn1cbmNvbnN0IE5vdm9BdXRvY29tcGxldGVNaXhpbnM6IEhhc092ZXJsYXlDdG9yICYgQ2FuRGlzYWJsZUN0b3IgJiB0eXBlb2YgTm92b0F1dG9jb21wbGV0ZUJhc2UgPSBtaXhpbk92ZXJsYXkoXG4gIG1peGluRGlzYWJsZWQoTm92b0F1dG9jb21wbGV0ZUJhc2UpLFxuKTtcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbm92by1hdXRvY29tcGxldGUnLFxuICB0ZW1wbGF0ZVVybDogJ2F1dG9jb21wbGV0ZS5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWydhdXRvY29tcGxldGUuY29tcG9uZW50LnNjc3MnXSxcbiAgaG9zdDoge1xuICAgIGNsYXNzOiAnbm92by1hdXRvY29tcGxldGUnLFxuICAgIC8vIEFsd2F5cyBzZXQgdGhlIHRhYmluZGV4IHRvIC0xIHNvIHRoYXQgaXQgZG9lc24ndCBvdmVybGFwIHdpdGggYW55IGN1c3RvbSB0YWJpbmRleCB0aGVcbiAgICAvLyBjb25zdW1lciBtYXkgaGF2ZSBwcm92aWRlZCwgd2hpbGUgc3RpbGwgYmVpbmcgYWJsZSB0byByZWNlaXZlIGZvY3VzLlxuICAgICdbYXR0ci50YWJpbmRleF0nOiAnZGlzYWJsZWQgPyBudWxsIDogLTEnLFxuICB9LFxuICBwcm92aWRlcnM6IFt7IHByb3ZpZGU6IE5PVk9fT1BUSU9OX1BBUkVOVF9DT01QT05FTlQsIHVzZUV4aXN0aW5nOiBOb3ZvQXV0b2NvbXBsZXRlRWxlbWVudCB9XSxcbiAgZXhwb3J0QXM6ICdub3ZvQXV0b2NvbXBsZXRlJyxcbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG59KVxuZXhwb3J0IGNsYXNzIE5vdm9BdXRvY29tcGxldGVFbGVtZW50XG4gIGV4dGVuZHMgTm92b0F1dG9jb21wbGV0ZU1peGluc1xuICBpbXBsZW1lbnRzIENhbkRpc2FibGUsIEFmdGVyQ29udGVudEluaXQsIEFmdGVyVmlld0luaXQsIE9uQ2hhbmdlcywgT25EZXN0cm95IHtcbiAgcHJpdmF0ZSBfc3RhdGVDaGFuZ2VzID0gU3Vic2NyaXB0aW9uLkVNUFRZO1xuICBwcml2YXRlIF9hY3RpdmVPcHRpb25DaGFuZ2VzID0gU3Vic2NyaXB0aW9uLkVNUFRZO1xuICBwcml2YXRlIF9zZWxlY3RlZE9wdGlvbkNoYW5nZXMgPSBTdWJzY3JpcHRpb24uRU1QVFk7XG4gIHByaXZhdGUgX2tleURvd25DaGFuZ2VzID0gU3Vic2NyaXB0aW9uLkVNUFRZO1xuXG4gIC8qKiBNYW5hZ2VzIGFjdGl2ZSBpdGVtIGluIG9wdGlvbiBsaXN0IGJhc2VkIG9uIGtleSBldmVudHMuICovXG4gIHByaXZhdGUgX2tleU1hbmFnZXI6IEFjdGl2ZURlc2NlbmRhbnRLZXlNYW5hZ2VyPE5vdm9PcHRpb24+O1xuXG4gIC8qKiBPbGQgdmFsdWUgb2YgdGhlIG5hdGl2ZSBpbnB1dC4gVXNlZCB0byB3b3JrIGFyb3VuZCBpc3N1ZXMgd2l0aCB0aGUgYGlucHV0YCBldmVudCBvbiBJRS4gKi9cbiAgcHJpdmF0ZSBfcHJldmlvdXNWYWx1ZTogc3RyaW5nIHwgbnVtYmVyIHwgbnVsbDtcblxuICBAQ29udGVudENoaWxkcmVuKE5vdm9PcHRncm91cCwgeyBkZXNjZW5kYW50czogdHJ1ZSB9KSBvcHRpb25Hcm91cHM6IFF1ZXJ5TGlzdDxOb3ZvT3B0Z3JvdXA+O1xuICBAQ29udGVudENoaWxkcmVuKE5vdm9PcHRpb24sIHsgZGVzY2VuZGFudHM6IHRydWUgfSkgb3B0aW9uczogUXVlcnlMaXN0PE5vdm9PcHRpb24+O1xuXG4gIC8qKiBFdmVudCB0aGF0IGlzIGVtaXR0ZWQgd2hlbmV2ZXIgYW4gb3B0aW9uIGZyb20gdGhlIGxpc3QgaXMgc2VsZWN0ZWQuICovXG4gIEBPdXRwdXQoKSByZWFkb25seSBvcHRpb25TZWxlY3RlZDogRXZlbnRFbWl0dGVyPE5vdm9PcHRpb25TZWxlY3RlZEV2ZW50PiA9IG5ldyBFdmVudEVtaXR0ZXI8Tm92b09wdGlvblNlbGVjdGVkRXZlbnQ+KCk7XG4gIC8qKiBFbWl0cyB3aGVuZXZlciBhbiBvcHRpb24gaXMgYWN0aXZhdGVkIHVzaW5nIHRoZSBrZXlib2FyZC4gKi9cbiAgQE91dHB1dCgpIHJlYWRvbmx5IG9wdGlvbkFjdGl2YXRlZDogRXZlbnRFbWl0dGVyPE5vdm9PcHRpb25TZWxlY3RlZEV2ZW50PiA9IG5ldyBFdmVudEVtaXR0ZXI8Tm92b09wdGlvblNlbGVjdGVkRXZlbnQ+KCk7XG5cbiAgLyoqIFRhYmluZGV4IGZvciB0aGUgdG9nZ2xlLiAqL1xuICBASW5wdXQoKSB0YWJJbmRleDogbnVtYmVyIHwgbnVsbDtcblxuICAvKiogS2V5IHRvIHVzZSB0byB0cmlnZ2VyIGF1dG9jb21wbGV0ZS4gdXNlZCBmb3IgdGV4dGFyZWEuICovXG4gIEBJbnB1dCgpIHRyaWdnZXJPbjogKGNvbnRyb2w6IE5vdm9GaWVsZENvbnRyb2w8YW55PikgPT4gYm9vbGVhbiA9IChjb250cm9sKSA9PiBjb250cm9sLmZvY3VzZWQ7XG5cbiAgLyoqIEZ1bmN0aW9uIHRoYXQgbWFwcyBhbiBvcHRpb24ncyBjb250cm9sIHZhbHVlIHRvIGl0cyBkaXNwbGF5IHZhbHVlIGluIHRoZSB0cmlnZ2VyLiAqL1xuICBASW5wdXQoKSBkaXNwbGF5V2l0aDogKCh2YWx1ZTogYW55KSA9PiBzdHJpbmcpIHwgbnVsbCA9IG51bGw7XG5cbiAgLyoqIFNjcmVlbnJlYWRlciBsYWJlbCBmb3IgdGhlIGJ1dHRvbi4gKi9cbiAgQElucHV0KCdhcmlhLWxhYmVsJykgYXJpYUxhYmVsOiBzdHJpbmc7XG5cbiAgLyoqIFdoZXRoZXIgdGhlIHVzZXIgc2hvdWxkIGJlIGFsbG93ZWQgdG8gc2VsZWN0IG11bHRpcGxlIG9wdGlvbnMuICovXG4gIEBJbnB1dCgpXG4gIGdldCBtdWx0aXBsZSgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5fbXVsdGlwbGUgfHwgISF0aGlzLl9mb3JtRmllbGQuX2NvbnRyb2w/Lm11bHRpcGxlIHx8IHRoaXMuX2Zvcm1GaWVsZC5fY29udHJvbD8uY29udHJvbFR5cGUgPT09ICdjaGlwLWxpc3QnO1xuICB9XG4gIHNldCBtdWx0aXBsZSh2YWx1ZTogYm9vbGVhbikge1xuICAgIHRoaXMuX211bHRpcGxlID0gY29lcmNlQm9vbGVhblByb3BlcnR5KHZhbHVlKTtcbiAgfVxuICBwcml2YXRlIF9tdWx0aXBsZTogYm9vbGVhbiA9IGZhbHNlO1xuXG4gIC8qKiBXaGV0aGVyIHRoZSB0b2dnbGUgYnV0dG9uIGlzIGRpc2FibGVkLiAqL1xuICBASW5wdXQoKVxuICBnZXQgZGlzYWJsZWQoKTogYm9vbGVhbiB7XG4gICAgaWYgKHRoaXMuX2Rpc2FibGVkID09PSB1bmRlZmluZWQgJiYgdGhpcy5fZm9ybUZpZWxkPy5fY29udHJvbCkge1xuICAgICAgcmV0dXJuIHRoaXMuX2Zvcm1GaWVsZC5fY29udHJvbC5kaXNhYmxlZDtcbiAgICB9XG4gICAgcmV0dXJuICEhdGhpcy5fZGlzYWJsZWQ7XG4gIH1cbiAgc2V0IGRpc2FibGVkKHZhbHVlOiBib29sZWFuKSB7XG4gICAgdGhpcy5fZGlzYWJsZWQgPSBjb2VyY2VCb29sZWFuUHJvcGVydHkodmFsdWUpO1xuICB9XG4gIHByaXZhdGUgX2Rpc2FibGVkOiBib29sZWFuO1xuXG4gIC8qKiBFbGVtZW50IGZvciB0aGUgcGFuZWwgY29udGFpbmluZyB0aGUgYXV0b2NvbXBsZXRlIG9wdGlvbnMuICovXG4gIEBWaWV3Q2hpbGQoTm92b092ZXJsYXlUZW1wbGF0ZUNvbXBvbmVudClcbiAgb3ZlcmxheTogTm92b092ZXJsYXlUZW1wbGF0ZUNvbXBvbmVudDtcblxuICBlbGVtZW50OiBFbGVtZW50UmVmO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgX2VsZW1lbnRSZWY6IEVsZW1lbnRSZWYsXG4gICAgcHJpdmF0ZSBjZHI6IENoYW5nZURldGVjdG9yUmVmLFxuICAgIEBBdHRyaWJ1dGUoJ3RhYmluZGV4JykgZGVmYXVsdFRhYkluZGV4OiBzdHJpbmcsXG4gICAgQE9wdGlvbmFsKCkgQEluamVjdChOT1ZPX0ZPUk1fRklFTEQpIHByaXZhdGUgX2Zvcm1GaWVsZDogTm92b0ZpZWxkRWxlbWVudCxcbiAgKSB7XG4gICAgc3VwZXIoKTtcbiAgICBjb25zdCBwYXJzZWRUYWJJbmRleCA9IE51bWJlcihkZWZhdWx0VGFiSW5kZXgpO1xuICAgIHRoaXMudGFiSW5kZXggPSBwYXJzZWRUYWJJbmRleCB8fCBwYXJzZWRUYWJJbmRleCA9PT0gMCA/IHBhcnNlZFRhYkluZGV4IDogbnVsbDtcbiAgfVxuXG4gIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpIHtcbiAgICB0aGlzLl93YXRjaFN0YXRlQ2hhbmdlcygpO1xuICAgIHRoaXMuX3dhdGNoU2VsZWN0aW9uRXZlbnRzKCk7XG4gIH1cblxuICBuZ09uRGVzdHJveSgpIHtcbiAgICB0aGlzLl9zdGF0ZUNoYW5nZXMudW5zdWJzY3JpYmUoKTtcbiAgICB0aGlzLl9hY3RpdmVPcHRpb25DaGFuZ2VzLnVuc3Vic2NyaWJlKCk7XG4gICAgdGhpcy5fc2VsZWN0ZWRPcHRpb25DaGFuZ2VzLnVuc3Vic2NyaWJlKCk7XG4gICAgdGhpcy5fa2V5RG93bkNoYW5nZXMudW5zdWJzY3JpYmUoKTtcbiAgfVxuXG4gIG5nQWZ0ZXJDb250ZW50SW5pdCgpIHtcbiAgICB0aGlzLl9rZXlNYW5hZ2VyID0gbmV3IEFjdGl2ZURlc2NlbmRhbnRLZXlNYW5hZ2VyPE5vdm9PcHRpb24+KHRoaXMub3B0aW9ucykud2l0aFdyYXAoKTtcbiAgICB0aGlzLl9hY3RpdmVPcHRpb25DaGFuZ2VzID0gdGhpcy5fa2V5TWFuYWdlci5jaGFuZ2Uuc3Vic2NyaWJlKChpbmRleCkgPT4ge1xuICAgICAgdGhpcy5vcHRpb25BY3RpdmF0ZWQuZW1pdCh7IHNvdXJjZTogdGhpcywgb3B0aW9uOiB0aGlzLm9wdGlvbnMudG9BcnJheSgpW2luZGV4XSB8fCBudWxsIH0pO1xuICAgIH0pO1xuICAgIHRoaXMuZWxlbWVudCA9IHRoaXMuX2Zvcm1GaWVsZC5nZXRDb25uZWN0ZWRPdmVybGF5T3JpZ2luKCkgfHwgdGhpcy5fZWxlbWVudFJlZjtcbiAgICB0aGlzLl9rZXlEb3duQ2hhbmdlcyA9IGZyb21FdmVudCh0aGlzLmVsZW1lbnQubmF0aXZlRWxlbWVudCwgJ2tleWRvd24nKS5zdWJzY3JpYmUoKGV2ZW50OiBLZXlib2FyZEV2ZW50KSA9PiB0aGlzLl9oYW5kbGVLZXlkb3duKGV2ZW50KSk7XG4gICAgdGhpcy5vcHRpb25zLmNoYW5nZXMuc3Vic2NyaWJlKCgpID0+IHtcbiAgICAgIHRoaXMuX3dhdGNoU3RhdGVDaGFuZ2VzKCk7XG4gICAgICB0aGlzLl93YXRjaFNlbGVjdGlvbkV2ZW50cygpO1xuICAgIH0pO1xuICB9XG5cbiAgbmdBZnRlclZpZXdJbml0KCkge1xuICAgIHRoaXMuX3dhdGNoU3RhdGVDaGFuZ2VzKCk7XG4gICAgdGhpcy5fd2F0Y2hTZWxlY3Rpb25FdmVudHMoKTtcbiAgfVxuXG4gIGNoZWNrUGFuZWwoKSB7XG4gICAgY29uc3QgaXNUcmlnZ2VyZWQgPSB0aGlzLnRyaWdnZXJPbih0aGlzLl9mb3JtRmllbGQuX2NvbnRyb2wpO1xuICAgIGNvbnNvbGUubG9nKCdJcyBUcmlnZ2VyZWQnLCBpc1RyaWdnZXJlZCk7XG4gICAgaWYgKGlzVHJpZ2dlcmVkICYmIHRoaXMuZWxlbWVudCkge1xuICAgICAgdGhpcy5vcGVuUGFuZWwoKTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIF9zZXRUcmlnZ2VyVmFsdWUodmFsdWU6IGFueSk6IHZvaWQge1xuICAgIGNvbnN0IHRvRGlzcGxheSA9IHRoaXMuZGlzcGxheVdpdGggPyB0aGlzLmRpc3BsYXlXaXRoKHZhbHVlKSA6IHZhbHVlO1xuICAgIC8vIFNpbXBseSBmYWxsaW5nIGJhY2sgdG8gYW4gZW1wdHkgc3RyaW5nIGlmIHRoZSBkaXNwbGF5IHZhbHVlIGlzIGZhbHN5IGRvZXMgbm90IHdvcmsgcHJvcGVybHkuXG4gICAgLy8gVGhlIGRpc3BsYXkgdmFsdWUgY2FuIGFsc28gYmUgdGhlIG51bWJlciB6ZXJvIGFuZCBzaG91bGRuJ3QgZmFsbCBiYWNrIHRvIGFuIGVtcHR5IHN0cmluZy5cbiAgICBjb25zdCBpbnB1dFZhbHVlID0gdG9EaXNwbGF5ICE9IG51bGwgPyB0b0Rpc3BsYXkgOiAnJztcbiAgICAvLyBJZiBpdCdzIHVzZWQgd2l0aGluIGEgYE5vdm9GaWVsZGAsIHdlIHNob3VsZCBzZXQgaXQgdGhyb3VnaCB0aGUgcHJvcGVydHkgc28gaXQgY2FuIGdvXG4gICAgLy8gdGhyb3VnaCBjaGFuZ2UgZGV0ZWN0aW9uLlxuICAgIGlmICh0aGlzLl9mb3JtRmllbGQpIHtcbiAgICAgIGNvbnN0IHsgY29udHJvbFR5cGUsIGxhc3RDYXJldFBvc2l0aW9uID0gMCB9ID0gdGhpcy5fZm9ybUZpZWxkLl9jb250cm9sO1xuICAgICAgaWYgKGNvbnRyb2xUeXBlID09PSAndGV4dGFyZWEnKSB7XG4gICAgICAgIGNvbnN0IGN1cnJlbnRWYWx1ZSA9IHRoaXMuX2Zvcm1GaWVsZC5fY29udHJvbC52YWx1ZS5zcGxpdCgnJyk7XG4gICAgICAgIGN1cnJlbnRWYWx1ZS5zcGxpY2UobGFzdENhcmV0UG9zaXRpb24sIDAsIGlucHV0VmFsdWUpO1xuICAgICAgICB0aGlzLl9mb3JtRmllbGQuX2NvbnRyb2wudmFsdWUgPSBjdXJyZW50VmFsdWUuam9pbignJyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBsZXQgdmFsdWVUb0VtaXQ6IGFueSA9IGlucHV0VmFsdWU7XG4gICAgICAgIGlmICh0aGlzLm11bHRpcGxlKSB7XG4gICAgICAgICAgY29uc29sZS5sb2coJ0N1cnJlbnQgRmllbGQnLCB0aGlzLl9mb3JtRmllbGQuX2NvbnRyb2wpO1xuICAgICAgICAgIGNvbnN0IGN1cnJlbnRWYWx1ZSA9IHRoaXMuX2Zvcm1GaWVsZC5fY29udHJvbC52YWx1ZTtcbiAgICAgICAgICBpZiAoQXJyYXkuaXNBcnJheShjdXJyZW50VmFsdWUpKSB7XG4gICAgICAgICAgICB2YWx1ZVRvRW1pdCA9IFsuLi5jdXJyZW50VmFsdWUsIGlucHV0VmFsdWVdO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB2YWx1ZVRvRW1pdCA9IFtjdXJyZW50VmFsdWUsIGlucHV0VmFsdWVdO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICB0aGlzLl9mb3JtRmllbGQuX2NvbnRyb2wudmFsdWUgPSB2YWx1ZVRvRW1pdDtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgLy8gdGhpcy5fZWxlbWVudC5uYXRpdmVFbGVtZW50LnZhbHVlID0gaW5wdXRWYWx1ZTtcbiAgICAgIGNvbnNvbGUud2FybihgQXV0b0NvbXBsZXRlIG9ubHkgaW50ZW5kZWQgdG8gYmUgdXNlZCB3aXRoaW4gYSBOb3ZvRmllbGRgKTtcbiAgICB9XG4gICAgdGhpcy5fcHJldmlvdXNWYWx1ZSA9IGlucHV0VmFsdWU7XG4gIH1cblxuICAvKipcbiAgICogQ2xlYXIgYW55IHByZXZpb3VzIHNlbGVjdGVkIG9wdGlvbiBhbmQgZW1pdCBhIHNlbGVjdGlvbiBjaGFuZ2UgZXZlbnQgZm9yIHRoaXMgb3B0aW9uXG4gICAqL1xuICBwcml2YXRlIF9jbGVhclByZXZpb3VzU2VsZWN0ZWRPcHRpb24oc2tpcDogTm92b09wdGlvbikge1xuICAgIHRoaXMub3B0aW9ucy5mb3JFYWNoKChvcHRpb24pID0+IHtcbiAgICAgIGlmIChvcHRpb24gIT09IHNraXAgJiYgb3B0aW9uLnNlbGVjdGVkKSB7XG4gICAgICAgIG9wdGlvbi5kZXNlbGVjdCgpO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgLyoqIEVtaXRzIHRoZSBgc2VsZWN0YCBldmVudC4gKi9cbiAgcHJpdmF0ZSBfZW1pdFNlbGVjdEV2ZW50KG9wdGlvbjogTm92b09wdGlvbik6IHZvaWQge1xuICAgIGNvbnN0IGV2ZW50ID0gbmV3IE5vdm9PcHRpb25TZWxlY3RlZEV2ZW50KHRoaXMsIG9wdGlvbik7XG4gICAgdGhpcy5vcHRpb25TZWxlY3RlZC5lbWl0KGV2ZW50KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBUaGlzIG1ldGhvZCBjbG9zZXMgdGhlIHBhbmVsLCBhbmQgaWYgYSB2YWx1ZSBpcyBzcGVjaWZpZWQsIGFsc28gc2V0cyB0aGUgYXNzb2NpYXRlZFxuICAgKiBjb250cm9sIHRvIHRoYXQgdmFsdWUuIEl0IHdpbGwgYWxzbyBtYXJrIHRoZSBjb250cm9sIGFzIGRpcnR5IGlmIHRoaXMgaW50ZXJhY3Rpb25cbiAgICogc3RlbW1lZCBmcm9tIHRoZSB1c2VyLlxuICAgKi9cbiAgcHJpdmF0ZSBfc2V0VmFsdWVBbmRDbG9zZShldmVudDogTm92b09wdGlvblNlbGVjdGlvbkNoYW5nZSB8IG51bGwpOiB2b2lkIHtcbiAgICBpZiAoZXZlbnQgJiYgZXZlbnQuc291cmNlKSB7XG4gICAgICB0aGlzLl9jbGVhclByZXZpb3VzU2VsZWN0ZWRPcHRpb24oZXZlbnQuc291cmNlKTtcbiAgICAgIHRoaXMuX3NldFRyaWdnZXJWYWx1ZShldmVudC5zb3VyY2UudmFsdWUpO1xuICAgICAgLy8gdGhpcy5fb25DaGFuZ2UoZXZlbnQuc291cmNlLnZhbHVlKTtcbiAgICAgIC8vIHRoaXMuX2VsZW1lbnQubmF0aXZlRWxlbWVudC5mb2N1cygpO1xuICAgICAgdGhpcy5fZm9ybUZpZWxkLl9jb250cm9sLmZvY3VzKCk7XG4gICAgICB0aGlzLl9lbWl0U2VsZWN0RXZlbnQoZXZlbnQuc291cmNlKTtcbiAgICAgIHRoaXMuX3dhdGNoU2VsZWN0aW9uRXZlbnRzKCk7XG4gICAgfVxuXG4gICAgdGhpcy5jbG9zZVBhbmVsKCk7XG4gIH1cblxuICBwcml2YXRlIF93YXRjaFNlbGVjdGlvbkV2ZW50cygpIHtcbiAgICBjb25zdCBzZWxlY3Rpb25FdmVudHMgPSB0aGlzLm9wdGlvbnMgPyBtZXJnZSguLi50aGlzLm9wdGlvbnMubWFwKChvcHRpb24pID0+IG9wdGlvbi5vblNlbGVjdGlvbkNoYW5nZSkpIDogb2YoKTtcbiAgICB0aGlzLl9zZWxlY3RlZE9wdGlvbkNoYW5nZXMudW5zdWJzY3JpYmUoKTtcbiAgICB0aGlzLl9zZWxlY3RlZE9wdGlvbkNoYW5nZXMgPSBzZWxlY3Rpb25FdmVudHMucGlwZSh0YWtlKDEpKS5zdWJzY3JpYmUoKGV2dDogTm92b09wdGlvblNlbGVjdGlvbkNoYW5nZSkgPT4ge1xuICAgICAgdGhpcy5fc2V0VmFsdWVBbmRDbG9zZShldnQpO1xuICAgIH0pO1xuICB9XG5cbiAgcHJpdmF0ZSBfd2F0Y2hTdGF0ZUNoYW5nZXMoKSB7XG4gICAgY29uc3QgaW5wdXRTdGF0ZUNoYW5nZWQgPSB0aGlzLl9mb3JtRmllbGQgJiYgdGhpcy5fZm9ybUZpZWxkLl9jb250cm9sID8gdGhpcy5fZm9ybUZpZWxkLl9jb250cm9sLnN0YXRlQ2hhbmdlcyA6IG9mKCk7XG4gICAgdGhpcy5fc3RhdGVDaGFuZ2VzLnVuc3Vic2NyaWJlKCk7XG4gICAgdGhpcy5fc3RhdGVDaGFuZ2VzID0gbWVyZ2UoaW5wdXRTdGF0ZUNoYW5nZWQpLnN1YnNjcmliZSgoKSA9PiB7XG4gICAgICB0aGlzLmNoZWNrUGFuZWwoKTtcbiAgICAgIHRoaXMuY2RyLm1hcmtGb3JDaGVjaygpO1xuICAgIH0pO1xuICB9XG5cbiAgLyoqIFRoZSBjdXJyZW50bHkgYWN0aXZlIG9wdGlvbiwgY29lcmNlZCB0byBNYXRPcHRpb24gdHlwZS4gKi9cbiAgZ2V0IGFjdGl2ZU9wdGlvbigpOiBOb3ZvT3B0aW9uIHwgbnVsbCB7XG4gICAgaWYgKHRoaXMuX2tleU1hbmFnZXIpIHtcbiAgICAgIHJldHVybiB0aGlzLl9rZXlNYW5hZ2VyLmFjdGl2ZUl0ZW07XG4gICAgfVxuXG4gICAgcmV0dXJuIG51bGw7XG4gIH1cblxuICBfaGFuZGxlS2V5ZG93bihldmVudDogS2V5Ym9hcmRFdmVudCk6IHZvaWQge1xuICAgIGNvbnN0IGtleSA9IGV2ZW50LmtleTtcblxuICAgIC8vIFByZXZlbnQgdGhlIGRlZmF1bHQgYWN0aW9uIG9uIGFsbCBlc2NhcGUga2V5IHByZXNzZXMuIFRoaXMgaXMgaGVyZSBwcmltYXJpbHkgdG8gYnJpbmcgSUVcbiAgICAvLyBpbiBsaW5lIHdpdGggb3RoZXIgYnJvd3NlcnMuIEJ5IGRlZmF1bHQsIHByZXNzaW5nIGVzY2FwZSBvbiBJRSB3aWxsIGNhdXNlIGl0IHRvIHJldmVydFxuICAgIC8vIHRoZSBpbnB1dCB2YWx1ZSB0byB0aGUgb25lIHRoYXQgaXQgaGFkIG9uIGZvY3VzLCBob3dldmVyIGl0IHdvbid0IGRpc3BhdGNoIGFueSBldmVudHNcbiAgICAvLyB3aGljaCBtZWFucyB0aGF0IHRoZSBtb2RlbCB2YWx1ZSB3aWxsIGJlIG91dCBvZiBzeW5jIHdpdGggdGhlIHZpZXcuXG4gICAgaWYgKGtleSA9PT0gS2V5LkVzY2FwZSAmJiAhaGFzTW9kaWZpZXJLZXkoZXZlbnQpKSB7XG4gICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIH1cblxuICAgIGlmICh0aGlzLmFjdGl2ZU9wdGlvbiAmJiBrZXkgPT09IEtleS5FbnRlciAmJiB0aGlzLnBhbmVsT3Blbikge1xuICAgICAgdGhpcy5hY3RpdmVPcHRpb24uX3NlbGVjdFZpYUludGVyYWN0aW9uKCk7XG4gICAgICAvLyB0aGlzLl9yZXNldEFjdGl2ZUl0ZW0oKTtcbiAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IHByZXZBY3RpdmVJdGVtID0gdGhpcy5fa2V5TWFuYWdlci5hY3RpdmVJdGVtO1xuICAgICAgY29uc3QgaXNBcnJvd0tleSA9IGtleSA9PT0gS2V5LkFycm93VXAgfHwga2V5ID09PSBLZXkuQXJyb3dEb3duO1xuXG4gICAgICBpZiAodGhpcy5wYW5lbE9wZW4gfHwga2V5ID09PSBLZXkuVGFiKSB7XG4gICAgICAgIHRoaXMuX2tleU1hbmFnZXIub25LZXlkb3duKGV2ZW50KTtcbiAgICAgIH0gZWxzZSBpZiAoaXNBcnJvd0tleSAmJiAhdGhpcy5vdmVybGF5LnBhbmVsT3Blbikge1xuICAgICAgICB0aGlzLm9wZW5QYW5lbCgpO1xuICAgICAgfVxuXG4gICAgICAvLyBpZiAoaXNBcnJvd0tleSB8fCB0aGlzLmF1dG9jb21wbGV0ZS5fa2V5TWFuYWdlci5hY3RpdmVJdGVtICE9PSBwcmV2QWN0aXZlSXRlbSkge1xuICAgICAgLy8gICB0aGlzLl9zY3JvbGxUb09wdGlvbih0aGlzLmF1dG9jb21wbGV0ZS5fa2V5TWFuYWdlci5hY3RpdmVJdGVtSW5kZXggfHwgMCk7XG4gICAgICAvLyB9XG4gICAgfVxuICB9XG5cbiAgc3RhdGljIG5nQWNjZXB0SW5wdXRUeXBlX2Rpc2FibGVkOiBCb29sZWFuSW5wdXQ7XG59XG4iLCI8bm92by1vdmVybGF5LXRlbXBsYXRlIFtwYXJlbnRdPVwiZWxlbWVudFwiIHBvc2l0aW9uPVwiYWJvdmUtYmVsb3dcIj5cbiAgPGRpdiBjbGFzcz1cIm5vdm8tYXV0b2NvbXBsZXRlLW9wdGlvbnNcIiBjZGstc2Nyb2xsYWJsZT5cbiAgICA8bmctY29udGVudD48L25nLWNvbnRlbnQ+XG4gIDwvZGl2PlxuPC9ub3ZvLW92ZXJsYXktdGVtcGxhdGU+Il19