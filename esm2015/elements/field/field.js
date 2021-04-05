// NG2
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ContentChild, ContentChildren, Directive, ElementRef, InjectionToken, Input, QueryList, ViewChild, } from '@angular/core';
import { Subject } from 'rxjs';
import { startWith, takeUntil } from 'rxjs/operators';
import { NovoErrorElement } from './error/error';
import { NovoFieldControl } from './field-control';
import { NovoHintElement } from './hint/hint';
import { NovoLabelElement } from './label/label';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
const _c0 = ["inputContainer"];
function NovoFieldElement_div_11_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 8);
    i0.ɵɵprojection(1, 4);
    i0.ɵɵelementEnd();
} }
function NovoFieldElement_div_12_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 8);
    i0.ɵɵprojection(1, 5);
    i0.ɵɵelementEnd();
} }
const _c1 = [[["novo-label"]], [["", "novoPrefix", ""]], "*", [["", "novoSuffix", ""]], [["novo-error"]], [["novo-hint"]]];
const _c2 = ["novo-label", "[novoPrefix]", "*", "[novoSuffix]", "novo-error", "novo-hint"];
export class NovoFieldPrefixDirective {
}
NovoFieldPrefixDirective.ɵfac = function NovoFieldPrefixDirective_Factory(t) { return new (t || NovoFieldPrefixDirective)(); };
NovoFieldPrefixDirective.ɵdir = i0.ɵɵdefineDirective({ type: NovoFieldPrefixDirective, selectors: [["", "novoPrefix", ""]] });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(NovoFieldPrefixDirective, [{
        type: Directive,
        args: [{ selector: '[novoPrefix]' }]
    }], null, null); })();
export class NovoFieldSuffixDirective {
}
NovoFieldSuffixDirective.ɵfac = function NovoFieldSuffixDirective_Factory(t) { return new (t || NovoFieldSuffixDirective)(); };
NovoFieldSuffixDirective.ɵdir = i0.ɵɵdefineDirective({ type: NovoFieldSuffixDirective, selectors: [["", "novoSuffix", ""]] });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(NovoFieldSuffixDirective, [{
        type: Directive,
        args: [{ selector: '[novoSuffix]' }]
    }], null, null); })();
const NOVO_INPUT_UNDERLINED_TYPES = ['text', 'date', 'time', 'datetime-local', 'password', 'email', 'tel', 'select', 'textarea', 'number'];
export const NOVO_FORM_FIELD = new InjectionToken('NovoFormField');
export class NovoFieldElement {
    constructor(_elementRef, _changeDetectorRef) {
        this._elementRef = _elementRef;
        this._changeDetectorRef = _changeDetectorRef;
        this.appearance = 'vertical';
        this._destroyed = new Subject();
    }
    /**
     * Gets an ElementRef for the element that a overlay attached to the form-field should be
     * positioned relative to.
     */
    getConnectedOverlayOrigin() {
        return this._inputContainerRef || this._elementRef;
    }
    ngAfterContentInit() {
        this._validateControlChild();
        const control = this._control;
        if (control.controlType) {
            this._elementRef.nativeElement.classList.add(`novo-field-type-${control.controlType}`);
        }
        // Subscribe to changes in the child control state in order to update the form field UI.
        // tslint:disable-next-line:deprecation
        control.stateChanges.pipe(startWith(null)).subscribe(() => {
            this._changeDetectorRef.markForCheck();
        });
        // Run change detection if the value changes.
        if (control.ngControl && control.ngControl.valueChanges) {
            control.ngControl.valueChanges.pipe(takeUntil(this._destroyed)).subscribe(() => this._changeDetectorRef.markForCheck());
        }
    }
    ngOnDestroy() {
        this._destroyed.next();
        this._destroyed.complete();
    }
    /** Throws an error if the form field's control is missing. */
    _validateControlChild() {
        if (!this._control) {
            throw new Error('Missing Novo Control');
        }
    }
    _isUnderlinedInput() {
        return NOVO_INPUT_UNDERLINED_TYPES.includes(this._control.controlType);
    }
    /** Determines whether to display hints or errors. */
    _getDisplayedMessages() {
        return this._errorElements && this._errorElements.length > 0 && this._control.errorState ? 'error' : 'hint';
    }
    /** Determines whether a class from the NgControl should be forwarded to the host element. */
    _shouldForward(prop) {
        const ngControl = this._control ? this._control.ngControl : null;
        return ngControl && ngControl[prop];
    }
    _hasLabel() {
        return !!this._labelElement;
    }
}
NovoFieldElement.ɵfac = function NovoFieldElement_Factory(t) { return new (t || NovoFieldElement)(i0.ɵɵdirectiveInject(i0.ElementRef), i0.ɵɵdirectiveInject(i0.ChangeDetectorRef)); };
NovoFieldElement.ɵcmp = i0.ɵɵdefineComponent({ type: NovoFieldElement, selectors: [["novo-field"]], contentQueries: function NovoFieldElement_ContentQueries(rf, ctx, dirIndex) { if (rf & 1) {
        i0.ɵɵcontentQuery(dirIndex, NovoLabelElement, true);
        i0.ɵɵcontentQuery(dirIndex, NovoFieldControl, true);
        i0.ɵɵcontentQuery(dirIndex, NovoHintElement, false);
        i0.ɵɵcontentQuery(dirIndex, NovoErrorElement, false);
        i0.ɵɵcontentQuery(dirIndex, NovoFieldPrefixDirective, false);
        i0.ɵɵcontentQuery(dirIndex, NovoFieldSuffixDirective, false);
    } if (rf & 2) {
        var _t;
        i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx._labelElement = _t.first);
        i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx._control = _t.first);
        i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx._hintElements = _t);
        i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx._errorElements = _t);
        i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx._prefixElements = _t);
        i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx._suffixElements = _t);
    } }, viewQuery: function NovoFieldElement_Query(rf, ctx) { if (rf & 1) {
        i0.ɵɵviewQuery(_c0, true);
    } if (rf & 2) {
        var _t;
        i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx._inputContainerRef = _t.first);
    } }, hostAttrs: [1, "novo-field"], hostVars: 30, hostBindings: function NovoFieldElement_HostBindings(rf, ctx) { if (rf & 2) {
        i0.ɵɵclassProp("novo-field-appearance-horizontal", ctx.appearance == "horizontal")("novo-field-appearance-vertical", ctx.appearance == "vertical")("novo-field-appearance-underlined", ctx._isUnderlinedInput())("novo-field-invalid", ctx._control.errorState)("novo-field-has-label", ctx._hasLabel())("novo-field-disabled", ctx._control.disabled)("novo-field-autofilled", ctx._control.autofilled)("novo-focused", ctx._control.focused)("ng-untouched", ctx._shouldForward("untouched"))("ng-touched", ctx._shouldForward("touched"))("ng-pristine", ctx._shouldForward("pristine"))("ng-dirty", ctx._shouldForward("dirty"))("ng-valid", ctx._shouldForward("valid"))("ng-invalid", ctx._shouldForward("invalid"))("ng-pending", ctx._shouldForward("pending"));
    } }, inputs: { appearance: "appearance", width: "width" }, features: [i0.ɵɵProvidersFeature([{ provide: NOVO_FORM_FIELD, useExisting: NovoFieldElement }])], ngContentSelectors: _c2, decls: 13, vars: 5, consts: [[1, "novo-field-label"], [1, "novo-field-input"], ["inputContainer", ""], [1, "novo-field-prefix"], [1, "novo-field-infix"], [1, "novo-field-suffix"], [1, "novo-field-messages", 3, "ngSwitch"], ["class", "novo-field-hint-wrapper", 4, "ngSwitchCase"], [1, "novo-field-hint-wrapper"]], template: function NovoFieldElement_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵprojectionDef(_c1);
        i0.ɵɵelementStart(0, "div", 0);
        i0.ɵɵprojection(1);
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(2, "div", 1, 2);
        i0.ɵɵelementStart(4, "div", 3);
        i0.ɵɵprojection(5, 1);
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(6, "div", 4);
        i0.ɵɵprojection(7, 2);
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(8, "div", 5);
        i0.ɵɵprojection(9, 3);
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(10, "div", 6);
        i0.ɵɵtemplate(11, NovoFieldElement_div_11_Template, 2, 0, "div", 7);
        i0.ɵɵtemplate(12, NovoFieldElement_div_12_Template, 2, 0, "div", 7);
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵadvance(2);
        i0.ɵɵstyleProp("width", ctx.width);
        i0.ɵɵadvance(8);
        i0.ɵɵproperty("ngSwitch", ctx._getDisplayedMessages());
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngSwitchCase", "error");
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngSwitchCase", "hint");
    } }, directives: [i1.NgSwitch, i1.NgSwitchCase], styles: ["@-webkit-keyframes rotate{0%{transform:rotate(0deg)}75%{transform:rotate(200deg)}to{transform:rotate(180deg)}}@keyframes rotate{0%{transform:rotate(0deg)}75%{transform:rotate(200deg)}to{transform:rotate(180deg)}}@-webkit-keyframes half-rotate{0%{transform:rotate(45deg)}75%{transform:rotate(100deg)}to{transform:rotate(90deg)}}@keyframes half-rotate{0%{transform:rotate(45deg)}75%{transform:rotate(100deg)}to{transform:rotate(90deg)}}@-webkit-keyframes rotateBack{0%{transform:rotate(90deg)}to{transform:rotate(0deg)}}@keyframes rotateBack{0%{transform:rotate(90deg)}to{transform:rotate(0deg)}}@-webkit-keyframes show{0%{opacity:0;transform:translateX(-100%)}75%{transform:translateX(0)}to{opacity:1;transform:translateX(0)}}@keyframes show{0%{opacity:0;transform:translateX(-100%)}75%{transform:translateX(0)}to{opacity:1;transform:translateX(0)}}[_nghost-%COMP%]{display:grid}.novo-field-appearance-horizontal[_nghost-%COMP%]{grid-gap:0 1rem;grid-template-areas:\"label input\" \". messages\";grid-template-columns:150px minmax(-webkit-min-content,-webkit-max-content);grid-template-columns:150px minmax(min-content,max-content)}.novo-field-appearance-vertical[_nghost-%COMP%]{grid-template-areas:\"label\" \"input\" \"messages\";grid-template-columns:minmax(-webkit-min-content,-webkit-max-content);grid-template-columns:minmax(min-content,max-content);grid-template-rows:repeat(3,minmax(-webkit-min-content,-webkit-max-content));grid-template-rows:repeat(3,minmax(min-content,max-content));width:-webkit-min-content;width:-moz-min-content;width:min-content}[_nghost-%COMP%]   .novo-field-label[_ngcontent-%COMP%]{-ms-grid-column:1;-ms-grid-row:1;align-items:center;display:grid;grid-area:label}.novo-field-appearance-underlined[_nghost-%COMP%]   .novo-field-input[_ngcontent-%COMP%]{border-bottom:1px solid #afb9c0!important}.novo-field-appearance-underlined[_nghost-%COMP%]:not(.novo-focused):hover   .novo-field-input[_ngcontent-%COMP%]{border-bottom:1px solid #3d464d!important}.novo-field-appearance-underlined.novo-focused[_nghost-%COMP%]   .novo-field-input[_ngcontent-%COMP%]{border-bottom:1px solid #4a89dc!important}.novo-field-appearance-underlined.novo-field-invalid[_nghost-%COMP%]   .novo-field-input[_ngcontent-%COMP%]{border-bottom:1px solid #da4453!important}.novo-field-type-color[_nghost-%COMP%]   .novo-field-input[_ngcontent-%COMP%]  .novo-input-element{padding:0}[_nghost-%COMP%]   .novo-field-input[_ngcontent-%COMP%]{-ms-grid-column:3;-ms-grid-row:1;display:grid;grid-area:input;grid-template-columns:minmax(auto,-webkit-max-content) 1fr minmax(auto,-webkit-max-content);grid-template-columns:minmax(auto,max-content) 1fr minmax(auto,max-content)}[_nghost-%COMP%]   .novo-field-input[_ngcontent-%COMP%]  .novo-input-element{background-color:transparent;background-image:none;border:none;border-bottom:none!important;box-shadow:none;padding:.4rem .2rem}[_nghost-%COMP%]   .novo-field-input[_ngcontent-%COMP%]  .novo-input-element:focus{outline:none}[_nghost-%COMP%]   .novo-field-input[_ngcontent-%COMP%]   .novo-field-infix[_ngcontent-%COMP%], [_nghost-%COMP%]   .novo-field-input[_ngcontent-%COMP%]   .novo-field-prefix[_ngcontent-%COMP%]{align-items:center;display:flex}[_nghost-%COMP%]   .novo-field-input[_ngcontent-%COMP%]   .novo-field-infix[_ngcontent-%COMP%]   select[_ngcontent-%COMP%]{width:100%}[_nghost-%COMP%]   .novo-field-input[_ngcontent-%COMP%]   .novo-field-suffix[_ngcontent-%COMP%]{align-items:center;display:flex}[_nghost-%COMP%]   .novo-field-messages[_ngcontent-%COMP%]{-ms-grid-column:3;-ms-grid-row:3;display:grid;grid-area:messages}"], changeDetection: 0 });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(NovoFieldElement, [{
        type: Component,
        args: [{
                selector: 'novo-field',
                templateUrl: './field.html',
                styleUrls: ['./field.scss'],
                changeDetection: ChangeDetectionStrategy.OnPush,
                host: {
                    class: 'novo-field',
                    '[class.novo-field-appearance-horizontal]': 'appearance=="horizontal"',
                    '[class.novo-field-appearance-vertical]': 'appearance=="vertical"',
                    // '[class.novo-field-appearance-standard]': 'appearance == "standard"',
                    // '[class.novo-field-appearance-fill]': 'appearance == "fill"',
                    // '[class.novo-field-appearance-outline]': 'appearance == "outline"',
                    // '[class.novo-field-appearance-legacy]': 'appearance == "legacy"',
                    '[class.novo-field-appearance-underlined]': '_isUnderlinedInput()',
                    '[class.novo-field-invalid]': '_control.errorState',
                    '[class.novo-field-has-label]': '_hasLabel()',
                    // '[class.novo-field-hide-placeholder]': '_hideControlPlaceholder()',
                    '[class.novo-field-disabled]': '_control.disabled',
                    '[class.novo-field-autofilled]': '_control.autofilled',
                    '[class.novo-focused]': '_control.focused',
                    // '[class.novo-accent]': 'color == "accent"',
                    // '[class.novo-warn]': 'color == "warn"',
                    '[class.ng-untouched]': '_shouldForward("untouched")',
                    '[class.ng-touched]': '_shouldForward("touched")',
                    '[class.ng-pristine]': '_shouldForward("pristine")',
                    '[class.ng-dirty]': '_shouldForward("dirty")',
                    '[class.ng-valid]': '_shouldForward("valid")',
                    '[class.ng-invalid]': '_shouldForward("invalid")',
                    '[class.ng-pending]': '_shouldForward("pending")',
                },
                providers: [{ provide: NOVO_FORM_FIELD, useExisting: NovoFieldElement }],
            }]
    }], function () { return [{ type: i0.ElementRef }, { type: i0.ChangeDetectorRef }]; }, { _inputContainerRef: [{
            type: ViewChild,
            args: ['inputContainer']
        }], _labelElement: [{
            type: ContentChild,
            args: [NovoLabelElement]
        }], _hintElements: [{
            type: ContentChildren,
            args: [NovoHintElement]
        }], _errorElements: [{
            type: ContentChildren,
            args: [NovoErrorElement]
        }], _prefixElements: [{
            type: ContentChildren,
            args: [NovoFieldPrefixDirective]
        }], _suffixElements: [{
            type: ContentChildren,
            args: [NovoFieldSuffixDirective]
        }], _control: [{
            type: ContentChild,
            args: [NovoFieldControl]
        }], appearance: [{
            type: Input
        }], width: [{
            type: Input
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmllbGQuanMiLCJzb3VyY2VSb290IjoiL2hvbWUvdHJhdmlzL2J1aWxkL2J1bGxob3JuL25vdm8tZWxlbWVudHMvcHJvamVjdHMvbm92by1lbGVtZW50cy9zcmMvIiwic291cmNlcyI6WyJlbGVtZW50cy9maWVsZC9maWVsZC50cyIsImVsZW1lbnRzL2ZpZWxkL2ZpZWxkLmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsTUFBTTtBQUNOLE9BQU8sRUFFTCx1QkFBdUIsRUFDdkIsaUJBQWlCLEVBQ2pCLFNBQVMsRUFDVCxZQUFZLEVBQ1osZUFBZSxFQUNmLFNBQVMsRUFDVCxVQUFVLEVBQ1YsY0FBYyxFQUNkLEtBQUssRUFFTCxTQUFTLEVBQ1QsU0FBUyxHQUNWLE1BQU0sZUFBZSxDQUFDO0FBRXZCLE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDL0IsT0FBTyxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUN0RCxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDakQsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDbkQsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLGFBQWEsQ0FBQztBQUM5QyxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxlQUFlLENBQUM7Ozs7O0lDUC9DLDhCQUNFO0lBQUEscUJBQWdDO0lBQ2xDLGlCQUFNOzs7SUFDTiw4QkFDRTtJQUFBLHFCQUErQjtJQUNqQyxpQkFBTTs7OztBREtSLE1BQU0sT0FBTyx3QkFBd0I7O2dHQUF4Qix3QkFBd0I7NkRBQXhCLHdCQUF3QjtrREFBeEIsd0JBQXdCO2NBRHBDLFNBQVM7ZUFBQyxFQUFFLFFBQVEsRUFBRSxjQUFjLEVBQUU7O0FBR3ZDLE1BQU0sT0FBTyx3QkFBd0I7O2dHQUF4Qix3QkFBd0I7NkRBQXhCLHdCQUF3QjtrREFBeEIsd0JBQXdCO2NBRHBDLFNBQVM7ZUFBQyxFQUFF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cUJBQXFCO29CQUNuRCw4QkFBOEIsRUFBRSxhQUFhO29CQUM3QyxzRUFBc0U7b0JBQ3RFLDZCQUE2QixFQUFFLG1CQUFtQjtvQkFDbEQsK0JBQStCLEVBQUUscUJBQXFCO29CQUN0RCxzQkFBc0IsRUFBRSxrQkFBa0I7b0JBQzFDLDhDQUE4QztvQkFDOUMsMENBQTBDO29CQUMxQyxzQkFBc0IsRUFBRSw2QkFBNkI7b0JBQ3JELG9CQUFvQixFQUFFLDJCQUEyQjtvQkFDakQscUJBQXFCLEVBQUUsNEJBQTRCO29CQUNuRCxrQkFBa0IsRUFBRSx5QkFBeUI7b0JBQzdDLGtCQUFrQixFQUFFLHlCQUF5QjtvQkFDN0Msb0JBQW9CLEVBQUUsMkJBQTJCO29CQUNqRCxvQkFBb0IsRUFBRSwyQkFBMkI7aUJBQ2xEO2dCQUNELFNBQVMsRUFBRSxDQUFDLEVBQUUsT0FBTyxFQUFFLGVBQWUsRUFBRSxXQUFXLEVBQUUsZ0JBQWdCLEVBQUUsQ0FBQzthQUN6RTs2RkFHOEIsa0JBQWtCO2tCQUE5QyxTQUFTO21CQUFDLGdCQUFnQjtZQUdLLGFBQWE7a0JBQTVDLFlBQVk7bUJBQUMsZ0JBQWdCO1lBQ0ksYUFBYTtrQkFBOUMsZUFBZTttQkFBQyxlQUFlO1lBQ0csY0FBYztrQkFBaEQsZUFBZTttQkFBQyxnQkFBZ0I7WUFDVSxlQUFlO2tCQUF6RCxlQUFlO21CQUFDLHdCQUF3QjtZQUNFLGVBQWU7a0JBQXpELGVBQWU7bUJBQUMsd0JBQXdCO1lBRVQsUUFBUTtrQkFBdkMsWUFBWTttQkFBQyxnQkFBZ0I7WUFFckIsVUFBVTtrQkFBbEIsS0FBSztZQUdOLEtBQUs7a0JBREosS0FBSyIsInNvdXJjZXNDb250ZW50IjpbIi8vIE5HMlxuaW1wb3J0IHtcbiAgQWZ0ZXJDb250ZW50SW5pdCxcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXG4gIENoYW5nZURldGVjdG9yUmVmLFxuICBDb21wb25lbnQsXG4gIENvbnRlbnRDaGlsZCxcbiAgQ29udGVudENoaWxkcmVuLFxuICBEaXJlY3RpdmUsXG4gIEVsZW1lbnRSZWYsXG4gIEluamVjdGlvblRva2VuLFxuICBJbnB1dCxcbiAgT25EZXN0cm95LFxuICBRdWVyeUxpc3QsXG4gIFZpZXdDaGlsZCxcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBOZ0NvbnRyb2wgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQgeyBTdWJqZWN0IH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBzdGFydFdpdGgsIHRha2VVbnRpbCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7IE5vdm9FcnJvckVsZW1lbnQgfSBmcm9tICcuL2Vycm9yL2Vycm9yJztcbmltcG9ydCB7IE5vdm9GaWVsZENvbnRyb2wgfSBmcm9tICcuL2ZpZWxkLWNvbnRyb2wnO1xuaW1wb3J0IHsgTm92b0hpbnRFbGVtZW50IH0gZnJvbSAnLi9oaW50L2hpbnQnO1xuaW1wb3J0IHsgTm92b0xhYmVsRWxlbWVudCB9IGZyb20gJy4vbGFiZWwvbGFiZWwnO1xuXG5ARGlyZWN0aXZlKHsgc2VsZWN0b3I6ICdbbm92b1ByZWZpeF0nIH0pXG5leHBvcnQgY2xhc3MgTm92b0ZpZWxkUHJlZml4RGlyZWN0aXZlIHt9XG5ARGlyZWN0aXZlKHsgc2VsZWN0b3I6ICdbbm92b1N1ZmZpeF0nIH0pXG5leHBvcnQgY2xhc3MgTm92b0ZpZWxkU3VmZml4RGlyZWN0aXZlIHt9XG5cbmNvbnN0IE5PVk9fSU5QVVRfVU5ERVJMSU5FRF9UWVBFUyA9IFsndGV4dCcsICdkYXRlJywgJ3RpbWUnLCAnZGF0ZXRpbWUtbG9jYWwnLCAncGFzc3dvcmQnLCAnZW1haWwnLCAndGVsJywgJ3NlbGVjdCcsICd0ZXh0YXJlYScsICdudW1iZXInXTtcbmV4cG9ydCBjb25zdCBOT1ZPX0ZPUk1fRklFTEQgPSBuZXcgSW5qZWN0aW9uVG9rZW48Tm92b0ZpZWxkRWxlbWVudD4oJ05vdm9Gb3JtRmllbGQnKTtcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbm92by1maWVsZCcsXG4gIHRlbXBsYXRlVXJsOiAnLi9maWVsZC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vZmllbGQuc2NzcyddLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbiAgaG9zdDoge1xuICAgIGNsYXNzOiAnbm92by1maWVsZCcsXG4gICAgJ1tjbGFzcy5ub3ZvLWZpZWxkLWFwcGVhcmFuY2UtaG9yaXpvbnRhbF0nOiAnYXBwZWFyYW5jZT09XCJob3Jpem9udGFsXCInLFxuICAgICdbY2xhc3Mubm92by1maWVsZC1hcHBlYXJhbmNlLXZlcnRpY2FsXSc6ICdhcHBlYXJhbmNlPT1cInZlcnRpY2FsXCInLFxuICAgIC8vICdbY2xhc3Mubm92by1maWVsZC1hcHBlYXJhbmNlLXN0YW5kYXJkXSc6ICdhcHBlYXJhbmNlID09IFwic3RhbmRhcmRcIicsXG4gICAgLy8gJ1tjbGFzcy5ub3ZvLWZpZWxkLWFwcGVhcmFuY2UtZmlsbF0nOiAnYXBwZWFyYW5jZSA9PSBcImZpbGxcIicsXG4gICAgLy8gJ1tjbGFzcy5ub3ZvLWZpZWxkLWFwcGVhcmFuY2Utb3V0bGluZV0nOiAnYXBwZWFyYW5jZSA9PSBcIm91dGxpbmVcIicsXG4gICAgLy8gJ1tjbGFzcy5ub3ZvLWZpZWxkLWFwcGVhcmFuY2UtbGVnYWN5XSc6ICdhcHBlYXJhbmNlID09IFwibGVnYWN5XCInLFxuICAgICdbY2xhc3Mubm92by1maWVsZC1hcHBlYXJhbmNlLXVuZGVybGluZWRdJzogJ19pc1VuZGVybGluZWRJbnB1dCgpJyxcbiAgICAnW2NsYXNzLm5vdm8tZmllbGQtaW52YWxpZF0nOiAnX2NvbnRyb2wuZXJyb3JTdGF0ZScsXG4gICAgJ1tjbGFzcy5ub3ZvLWZpZWxkLWhhcy1sYWJlbF0nOiAnX2hhc0xhYmVsKCknLFxuICAgIC8vICdbY2xhc3Mubm92by1maWVsZC1oaWRlLXBsYWNlaG9sZGVyXSc6ICdfaGlkZUNvbnRyb2xQbGFjZWhvbGRlcigpJyxcbiAgICAnW2NsYXNzLm5vdm8tZmllbGQtZGlzYWJsZWRdJzogJ19jb250cm9sLmRpc2FibGVkJyxcbiAgICAnW2NsYXNzLm5vdm8tZmllbGQtYXV0b2ZpbGxlZF0nOiAnX2NvbnRyb2wuYXV0b2ZpbGxlZCcsXG4gICAgJ1tjbGFzcy5ub3ZvLWZvY3VzZWRdJzogJ19jb250cm9sLmZvY3VzZWQnLFxuICAgIC8vICdbY2xhc3Mubm92by1hY2NlbnRdJzogJ2NvbG9yID09IFwiYWNjZW50XCInLFxuICAgIC8vICdbY2xhc3Mubm92by13YXJuXSc6ICdjb2xvciA9PSBcIndhcm5cIicsXG4gICAgJ1tjbGFzcy5uZy11bnRvdWNoZWRdJzogJ19zaG91bGRGb3J3YXJkKFwidW50b3VjaGVkXCIpJyxcbiAgICAnW2NsYXNzLm5nLXRvdWNoZWRdJzogJ19zaG91bGRGb3J3YXJkKFwidG91Y2hlZFwiKScsXG4gICAgJ1tjbGFzcy5uZy1wcmlzdGluZV0nOiAnX3Nob3VsZEZvcndhcmQoXCJwcmlzdGluZVwiKScsXG4gICAgJ1tjbGFzcy5uZy1kaXJ0eV0nOiAnX3Nob3VsZEZvcndhcmQoXCJkaXJ0eVwiKScsXG4gICAgJ1tjbGFzcy5uZy12YWxpZF0nOiAnX3Nob3VsZEZvcndhcmQoXCJ2YWxpZFwiKScsXG4gICAgJ1tjbGFzcy5uZy1pbnZhbGlkXSc6ICdfc2hvdWxkRm9yd2FyZChcImludmFsaWRcIiknLFxuICAgICdbY2xhc3MubmctcGVuZGluZ10nOiAnX3Nob3VsZEZvcndhcmQoXCJwZW5kaW5nXCIpJyxcbiAgfSxcbiAgcHJvdmlkZXJzOiBbeyBwcm92aWRlOiBOT1ZPX0ZPUk1fRklFTEQsIHVzZUV4aXN0aW5nOiBOb3ZvRmllbGRFbGVtZW50IH1dLFxufSlcbmV4cG9ydCBjbGFzcyBOb3ZvRmllbGRFbGVtZW50IGltcGxlbWVudHMgQWZ0ZXJDb250ZW50SW5pdCwgT25EZXN0cm95IHtcbiAgLy8gQFZpZXdDaGlsZCgnY29ubmVjdGlvbkNvbnRhaW5lcicpIF9jb25uZWN0aW9uQ29udGFpbmVyUmVmOiBFbGVtZW50UmVmO1xuICBAVmlld0NoaWxkKCdpbnB1dENvbnRhaW5lcicpIF9pbnB1dENvbnRhaW5lclJlZjogRWxlbWVudFJlZjtcbiAgLy8gQFZpZXdDaGlsZCgnbGFiZWwnKSBwcml2YXRlIF9sYWJlbDogRWxlbWVudFJlZjxIVE1MRWxlbWVudD47XG5cbiAgQENvbnRlbnRDaGlsZChOb3ZvTGFiZWxFbGVtZW50KSBfbGFiZWxFbGVtZW50OiBOb3ZvTGFiZWxFbGVtZW50O1xuICBAQ29udGVudENoaWxkcmVuKE5vdm9IaW50RWxlbWVudCkgX2hpbnRFbGVtZW50czogUXVlcnlMaXN0PE5vdm9IaW50RWxlbWVudD47XG4gIEBDb250ZW50Q2hpbGRyZW4oTm92b0Vycm9yRWxlbWVudCkgX2Vycm9yRWxlbWVudHM6IFF1ZXJ5TGlzdDxOb3ZvRXJyb3JFbGVtZW50PjtcbiAgQENvbnRlbnRDaGlsZHJlbihOb3ZvRmllbGRQcmVmaXhEaXJlY3RpdmUpIF9wcmVmaXhFbGVtZW50czogUXVlcnlMaXN0PE5vdm9GaWVsZFByZWZpeERpcmVjdGl2ZT47XG4gIEBDb250ZW50Q2hpbGRyZW4oTm92b0ZpZWxkU3VmZml4RGlyZWN0aXZlKSBfc3VmZml4RWxlbWVudHM6IFF1ZXJ5TGlzdDxOb3ZvRmllbGRTdWZmaXhEaXJlY3RpdmU+O1xuXG4gIEBDb250ZW50Q2hpbGQoTm92b0ZpZWxkQ29udHJvbCkgX2NvbnRyb2w6IE5vdm9GaWVsZENvbnRyb2w8YW55PjtcblxuICBASW5wdXQoKSBhcHBlYXJhbmNlOiAnaG9yaXpvbnRhbCcgfCAndmVydGljYWwnID0gJ3ZlcnRpY2FsJztcblxuICBASW5wdXQoKVxuICB3aWR0aDogc3RyaW5nO1xuXG4gIHByaXZhdGUgX2Rlc3Ryb3llZCA9IG5ldyBTdWJqZWN0PHZvaWQ+KCk7XG5cbiAgY29uc3RydWN0b3IocHVibGljIF9lbGVtZW50UmVmOiBFbGVtZW50UmVmLCBwcml2YXRlIF9jaGFuZ2VEZXRlY3RvclJlZjogQ2hhbmdlRGV0ZWN0b3JSZWYpIHt9XG4gIC8qKlxuICAgKiBHZXRzIGFuIEVsZW1lbnRSZWYgZm9yIHRoZSBlbGVtZW50IHRoYXQgYSBvdmVybGF5IGF0dGFjaGVkIHRvIHRoZSBmb3JtLWZpZWxkIHNob3VsZCBiZVxuICAgKiBwb3NpdGlvbmVkIHJlbGF0aXZlIHRvLlxuICAgKi9cbiAgZ2V0Q29ubmVjdGVkT3ZlcmxheU9yaWdpbigpOiBFbGVtZW50UmVmIHtcbiAgICByZXR1cm4gdGhpcy5faW5wdXRDb250YWluZXJSZWYgfHwgdGhpcy5fZWxlbWVudFJlZjtcbiAgfVxuICBuZ0FmdGVyQ29udGVudEluaXQoKTogYW55IHtcbiAgICB0aGlzLl92YWxpZGF0ZUNvbnRyb2xDaGlsZCgpO1xuXG4gICAgY29uc3QgY29udHJvbCA9IHRoaXMuX2NvbnRyb2w7XG5cbiAgICBpZiAoY29udHJvbC5jb250cm9sVHlwZSkge1xuICAgICAgdGhpcy5fZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LmNsYXNzTGlzdC5hZGQoYG5vdm8tZmllbGQtdHlwZS0ke2NvbnRyb2wuY29udHJvbFR5cGV9YCk7XG4gICAgfVxuXG4gICAgLy8gU3Vic2NyaWJlIHRvIGNoYW5nZXMgaW4gdGhlIGNoaWxkIGNvbnRyb2wgc3RhdGUgaW4gb3JkZXIgdG8gdXBkYXRlIHRoZSBmb3JtIGZpZWxkIFVJLlxuICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpkZXByZWNhdGlvblxuICAgIGNvbnRyb2wuc3RhdGVDaGFuZ2VzLnBpcGUoc3RhcnRXaXRoKG51bGwpKS5zdWJzY3JpYmUoKCkgPT4ge1xuICAgICAgdGhpcy5fY2hhbmdlRGV0ZWN0b3JSZWYubWFya0ZvckNoZWNrKCk7XG4gICAgfSk7XG5cbiAgICAvLyBSdW4gY2hhbmdlIGRldGVjdGlvbiBpZiB0aGUgdmFsdWUgY2hhbmdlcy5cbiAgICBpZiAoY29udHJvbC5uZ0NvbnRyb2wgJiYgY29udHJvbC5uZ0NvbnRyb2wudmFsdWVDaGFuZ2VzKSB7XG4gICAgICBjb250cm9sLm5nQ29udHJvbC52YWx1ZUNoYW5nZXMucGlwZSh0YWtlVW50aWwodGhpcy5fZGVzdHJveWVkKSkuc3Vic2NyaWJlKCgpID0+IHRoaXMuX2NoYW5nZURldGVjdG9yUmVmLm1hcmtGb3JDaGVjaygpKTtcbiAgICB9XG4gIH1cblxuICBuZ09uRGVzdHJveSgpIHtcbiAgICB0aGlzLl9kZXN0cm95ZWQubmV4dCgpO1xuICAgIHRoaXMuX2Rlc3Ryb3llZC5jb21wbGV0ZSgpO1xuICB9XG5cbiAgLyoqIFRocm93cyBhbiBlcnJvciBpZiB0aGUgZm9ybSBmaWVsZCdzIGNvbnRyb2wgaXMgbWlzc2luZy4gKi9cbiAgcHJvdGVjdGVkIF92YWxpZGF0ZUNvbnRyb2xDaGlsZCgpIHtcbiAgICBpZiAoIXRoaXMuX2NvbnRyb2wpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignTWlzc2luZyBOb3ZvIENvbnRyb2wnKTtcbiAgICB9XG4gIH1cblxuICBfaXNVbmRlcmxpbmVkSW5wdXQoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIE5PVk9fSU5QVVRfVU5ERVJMSU5FRF9UWVBFUy5pbmNsdWRlcyh0aGlzLl9jb250cm9sLmNvbnRyb2xUeXBlKTtcbiAgfVxuXG4gIC8qKiBEZXRlcm1pbmVzIHdoZXRoZXIgdG8gZGlzcGxheSBoaW50cyBvciBlcnJvcnMuICovXG4gIF9nZXREaXNwbGF5ZWRNZXNzYWdlcygpOiAnZXJyb3InIHwgJ2hpbnQnIHtcbiAgICByZXR1cm4gdGhpcy5fZXJyb3JFbGVtZW50cyAmJiB0aGlzLl9lcnJvckVsZW1lbnRzLmxlbmd0aCA+IDAgJiYgdGhpcy5fY29udHJvbC5lcnJvclN0YXRlID8gJ2Vycm9yJyA6ICdoaW50JztcbiAgfVxuXG4gIC8qKiBEZXRlcm1pbmVzIHdoZXRoZXIgYSBjbGFzcyBmcm9tIHRoZSBOZ0NvbnRyb2wgc2hvdWxkIGJlIGZvcndhcmRlZCB0byB0aGUgaG9zdCBlbGVtZW50LiAqL1xuICBfc2hvdWxkRm9yd2FyZChwcm9wOiBrZXlvZiBOZ0NvbnRyb2wpOiBib29sZWFuIHtcbiAgICBjb25zdCBuZ0NvbnRyb2wgPSB0aGlzLl9jb250cm9sID8gdGhpcy5fY29udHJvbC5uZ0NvbnRyb2wgOiBudWxsO1xuICAgIHJldHVybiBuZ0NvbnRyb2wgJiYgbmdDb250cm9sW3Byb3BdO1xuICB9XG5cbiAgX2hhc0xhYmVsKCkge1xuICAgIHJldHVybiAhIXRoaXMuX2xhYmVsRWxlbWVudDtcbiAgfVxufVxuIiwiPGRpdiBjbGFzcz1cIm5vdm8tZmllbGQtbGFiZWxcIj5cbiAgPG5nLWNvbnRlbnQgc2VsZWN0PVwibm92by1sYWJlbFwiPjwvbmctY29udGVudD5cbjwvZGl2PlxuPGRpdiBjbGFzcz1cIm5vdm8tZmllbGQtaW5wdXRcIiBbc3R5bGUud2lkdGhdPVwid2lkdGhcIiAjaW5wdXRDb250YWluZXI+XG4gIDxkaXYgY2xhc3M9XCJub3ZvLWZpZWxkLXByZWZpeFwiPlxuICAgIDxuZy1jb250ZW50IHNlbGVjdD1cIltub3ZvUHJlZml4XVwiPjwvbmctY29udGVudD5cbiAgPC9kaXY+XG4gIDxkaXYgY2xhc3M9XCJub3ZvLWZpZWxkLWluZml4XCI+XG4gICAgPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PlxuICA8L2Rpdj5cbiAgPGRpdiBjbGFzcz1cIm5vdm8tZmllbGQtc3VmZml4XCI+XG4gICAgPG5nLWNvbnRlbnQgc2VsZWN0PVwiW25vdm9TdWZmaXhdXCI+PC9uZy1jb250ZW50PlxuICA8L2Rpdj5cbjwvZGl2PlxuPGRpdiBjbGFzcz1cIm5vdm8tZmllbGQtbWVzc2FnZXNcIiBbbmdTd2l0Y2hdPVwiX2dldERpc3BsYXllZE1lc3NhZ2VzKClcIj5cbiAgPGRpdiBjbGFzcz1cIm5vdm8tZmllbGQtaGludC13cmFwcGVyXCIgKm5nU3dpdGNoQ2FzZT1cIidlcnJvcidcIj5cbiAgICA8bmctY29udGVudCBzZWxlY3Q9XCJub3ZvLWVycm9yXCI+PC9uZy1jb250ZW50PlxuICA8L2Rpdj5cbiAgPGRpdiBjbGFzcz1cIm5vdm8tZmllbGQtaGludC13cmFwcGVyXCIgKm5nU3dpdGNoQ2FzZT1cIidoaW50J1wiPlxuICAgIDxuZy1jb250ZW50IHNlbGVjdD1cIm5vdm8taGludFwiPjwvbmctY29udGVudD5cbiAgPC9kaXY+XG48L2Rpdj4iXX0=