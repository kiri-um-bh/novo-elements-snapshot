import { Directionality } from '@angular/cdk/bidi';
import { coerceBooleanProperty } from '@angular/cdk/coercion';
import { ViewportRuler } from '@angular/cdk/overlay';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ContentChild, ContentChildren, ElementRef, EventEmitter, Inject, Input, NgZone, Optional, Output, QueryList, ViewChild, ViewEncapsulation, } from '@angular/core';
import { ANIMATION_MODULE_TYPE } from '@angular/platform-browser/animations';
import { merge, Subject } from 'rxjs';
import { debounceTime, filter, startWith, take, takeUntil } from 'rxjs/operators';
import { NovoLayoutContent } from '../content/layout-content.component';
import { NOVO_LAYOUT_CONTAINER, NOVO_LAYOUT_DEFAULT_AUTOSIZE } from '../layout.constants';
import { NovoSidenavComponent } from '../sidenav/sidenav.component';
import * as i0 from "@angular/core";
import * as i1 from "@angular/cdk/bidi";
import * as i2 from "@angular/cdk/overlay";
function NovoLayoutContainer_div_0_Template(rf, ctx) { if (rf & 1) {
    const _r3 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 2);
    i0.ɵɵlistener("click", function NovoLayoutContainer_div_0_Template_div_click_0_listener() { i0.ɵɵrestoreView(_r3); const ctx_r2 = i0.ɵɵnextContext(); return ctx_r2._onBackdropClicked(); });
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵclassProp("novo-drawer-shown", ctx_r0._isShowingBackdrop());
} }
function NovoLayoutContainer_novo_layout_content_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "novo-layout-content", 3);
    i0.ɵɵprojection(1, 2);
    i0.ɵɵelementEnd();
} }
const _c0 = [[["novo-sidenav"]], [["novo-layout-content"]], "*"];
const _c1 = ["novo-sidenav", "novo-layout-content", "*"];
export class NovoLayoutContainer {
    constructor(_dir, _element, _ngZone, _changeDetectorRef, viewportRuler, defaultAutosize = false, _animationMode) {
        this._dir = _dir;
        this._element = _element;
        this._ngZone = _ngZone;
        this._changeDetectorRef = _changeDetectorRef;
        this._animationMode = _animationMode;
        /** Drawers that belong to this container. */
        this._drawers = new QueryList();
        /** Event emitted when the drawer backdrop is clicked. */
        this.backdropClick = new EventEmitter();
        /** Emits when the component is destroyed. */
        this._destroyed = new Subject();
        /** Emits on every ngDoCheck. Used for debouncing reflows. */
        this._doCheckSubject = new Subject();
        /**
         * Margins to be applied to the content. These are used to push / shrink the drawer content when a
         * drawer is open. We use margin rather than transform even for push mode because transform breaks
         * fixed position elements inside of the transformed element.
         */
        this._contentMargins = { left: null, right: null };
        this._contentMarginChanges = new Subject();
        // If a `Dir` directive exists up the tree, listen direction changes
        // and update the left/right properties to point to the proper start/end.
        if (_dir) {
            _dir.change.pipe(takeUntil(this._destroyed)).subscribe(() => {
                this._validateDrawers();
                this.updateContentMargins();
            });
        }
        // Since the minimum width of the sidenav depends on the viewport width,
        // we need to recompute the margins if the viewport changes.
        viewportRuler
            .change()
            .pipe(takeUntil(this._destroyed))
            .subscribe(() => this.updateContentMargins());
        this._autosize = defaultAutosize;
    }
    /** The drawer child with the `start` position. */
    get start() {
        return this._start;
    }
    /** The drawer child with the `end` position. */
    get end() {
        return this._end;
    }
    /**
     * Whether to automatically resize the container whenever
     * the size of any of its drawers changes.
     *
     * **Use at your own risk!** Enabling this option can cause layout thrashing by measuring
     * the drawers on every change detection cycle. Can be configured globally via the
     * `MAT_DRAWER_DEFAULT_AUTOSIZE` token.
     */
    get autosize() {
        return this._autosize;
    }
    set autosize(value) {
        this._autosize = coerceBooleanProperty(value);
    }
    /**
     * Whether the drawer container should have a backdrop while one of the sidenavs is open.
     * If explicitly set to `true`, the backdrop will be enabled for drawers in the `side`
     * mode as well.
     */
    get hasBackdrop() {
        if (this._backdropOverride == null) {
            return !this._start || this._start.mode !== 'side' || !this._end || this._end.mode !== 'side';
        }
        return this._backdropOverride;
    }
    set hasBackdrop(value) {
        this._backdropOverride = value == null ? null : coerceBooleanProperty(value);
    }
    /** Reference to the CdkScrollable instance that wraps the scrollable content. */
    get scrollable() {
        return this._userContent || this._content;
    }
    ngAfterContentInit() {
        this._allDrawers.changes
            .pipe(startWith(this._allDrawers), takeUntil(this._destroyed))
            .subscribe((drawer) => {
            this._drawers.reset(drawer.filter((item) => !item._container || item._container === this));
            this._drawers.notifyOnChanges();
        });
        this._drawers.changes.pipe(startWith(null)).subscribe(() => {
            this._validateDrawers();
            this._drawers.forEach((drawer) => {
                this._watchDrawerToggle(drawer);
                this._watchDrawerPosition(drawer);
                this._watchDrawerMode(drawer);
            });
            if (!this._drawers.length || this._isDrawerOpen(this._start) || this._isDrawerOpen(this._end)) {
                this.updateContentMargins();
            }
            this._changeDetectorRef.markForCheck();
        });
        // Avoid hitting the NgZone through the debounce timeout.
        this._ngZone.runOutsideAngular(() => {
            this._doCheckSubject
                .pipe(debounceTime(10), // Arbitrary debounce time, less than a frame at 60fps
            takeUntil(this._destroyed))
                .subscribe(() => this.updateContentMargins());
        });
    }
    ngOnDestroy() {
        this._contentMarginChanges.complete();
        this._doCheckSubject.complete();
        this._drawers.destroy();
        this._destroyed.next();
        this._destroyed.complete();
    }
    /** Calls `open` of both start and end drawers */
    open() {
        this._drawers.forEach((drawer) => drawer.open());
    }
    /** Calls `close` of both start and end drawers */
    close() {
        this._drawers.forEach((drawer) => drawer.close());
    }
    /**
     * Recalculates and updates the inline styles for the content. Note that this should be used
     * sparingly, because it causes a reflow.
     */
    updateContentMargins() {
        // 1. For drawers in `over` mode, they don't affect the content.
        // 2. For drawers in `side` mode they should shrink the content. We do this by adding to the
        //    left margin (for left drawer) or right margin (for right the drawer).
        // 3. For drawers in `push` mode the should shift the content without resizing it. We do this by
        //    adding to the left or right margin and simultaneously subtracting the same amount of
        //    margin from the other side.
        let left = 0;
        let right = 0;
        if (this._left && this._left.opened) {
            if (this._left.mode === 'side') {
                left += this._left._getWidth();
            }
            else if (this._left.mode === 'push') {
                const width = this._left._getWidth();
                left += width;
                right -= width;
            }
        }
        if (this._right && this._right.opened) {
            if (this._right.mode === 'side') {
                right += this._right._getWidth();
            }
            else if (this._right.mode === 'push') {
                const width = this._right._getWidth();
                right += width;
                left -= width;
            }
        }
        // If either `right` or `left` is zero, don't set a style to the element. This
        // allows users to specify a custom size via CSS class in SSR scenarios where the
        // measured widths will always be zero. Note that we reset to `null` here, rather
        // than below, in order to ensure that the types in the `if` below are consistent.
        left = left || null;
        right = right || null;
        if (left !== this._contentMargins.left || right !== this._contentMargins.right) {
            this._contentMargins = { left, right };
            // Pull back into the NgZone since in some cases we could be outside. We need to be careful
            // to do it only when something changed, otherwise we can end up hitting the zone too often.
            this._ngZone.run(() => this._contentMarginChanges.next(this._contentMargins));
        }
    }
    ngDoCheck() {
        // If users opted into autosizing, do a check every change detection cycle.
        if (this._autosize && this._isPushed()) {
            // Run outside the NgZone, otherwise the debouncer will throw us into an infinite loop.
            this._ngZone.runOutsideAngular(() => this._doCheckSubject.next());
        }
    }
    /**
     * Subscribes to drawer events in order to set a class on the main container element when the
     * drawer is open and the backdrop is visible. This ensures any overflow on the container element
     * is properly hidden.
     */
    _watchDrawerToggle(drawer) {
        drawer._animationStarted
            .pipe(filter((event) => event.fromState !== event.toState), takeUntil(this._drawers.changes))
            .subscribe((event) => {
            // Set the transition class on the container so that the animations occur. This should not
            // be set initially because animations should only be triggered via a change in state.
            if (event.toState !== 'open-instant' && this._animationMode !== 'NoopAnimations') {
                this._element.nativeElement.classList.add('mat-drawer-transition');
            }
            this.updateContentMargins();
            this._changeDetectorRef.markForCheck();
        });
        if (drawer.mode !== 'side') {
            drawer.openedChange.pipe(takeUntil(this._drawers.changes)).subscribe(() => this._setContainerClass(drawer.opened));
        }
    }
    /**
     * Subscribes to drawer onPositionChanged event in order to
     * re-validate drawers when the position changes.
     */
    _watchDrawerPosition(drawer) {
        if (!drawer) {
            return;
        }
        // NOTE: We need to wait for the microtask queue to be empty before validating,
        // since both drawers may be swapping positions at the same time.
        drawer.onPositionChanged.pipe(takeUntil(this._drawers.changes)).subscribe(() => {
            this._ngZone.onMicrotaskEmpty.pipe(take(1)).subscribe(() => {
                this._validateDrawers();
            });
        });
    }
    /** Subscribes to changes in drawer mode so we can run change detection. */
    _watchDrawerMode(drawer) {
        if (drawer) {
            drawer._modeChanged.pipe(takeUntil(merge(this._drawers.changes, this._destroyed))).subscribe(() => {
                this.updateContentMargins();
                this._changeDetectorRef.markForCheck();
            });
        }
    }
    /** Toggles the 'mat-drawer-opened' class on the main 'mat-drawer-container' element. */
    _setContainerClass(isAdd) {
        const classList = this._element.nativeElement.classList;
        const className = 'mat-drawer-container-has-open';
        if (isAdd) {
            classList.add(className);
        }
        else {
            classList.remove(className);
        }
    }
    /** Validate the state of the drawer children components. */
    _validateDrawers() {
        this._start = this._end = null;
        // Ensure that we have at most one start and one end drawer.
        this._drawers.forEach((drawer) => {
            if (drawer.position === 'end') {
                if (this._end != null) {
                    throw new Error('Duplication drawers at end');
                    // throwMatDuplicatedDrawerError('end');
                }
                this._end = drawer;
            }
            else {
                if (this._start != null) {
                    throw new Error('Duplication drawers at start');
                }
                this._start = drawer;
            }
        });
        this._right = this._left = null;
        // Detect if we're LTR or RTL.
        if (this._dir && this._dir.value === 'rtl') {
            this._left = this._end;
            this._right = this._start;
        }
        else {
            this._left = this._start;
            this._right = this._end;
        }
    }
    /** Whether the container is being pushed to the side by one of the drawers. */
    _isPushed() {
        return (this._isDrawerOpen(this._start) && this._start.mode !== 'over') || (this._isDrawerOpen(this._end) && this._end.mode !== 'over');
    }
    _onBackdropClicked() {
        this.backdropClick.emit();
        this._closeModalDrawersViaBackdrop();
    }
    _closeModalDrawersViaBackdrop() {
        // Close all open drawers where closing is not disabled and the mode is not `side`.
        [this._start, this._end]
            .filter((drawer) => drawer && !drawer.disableClose && this._canHaveBackdrop(drawer))
            .forEach((drawer) => drawer._closeViaBackdropClick());
    }
    _isShowingBackdrop() {
        return ((this._isDrawerOpen(this._start) && this._canHaveBackdrop(this._start)) ||
            (this._isDrawerOpen(this._end) && this._canHaveBackdrop(this._end)));
    }
    _canHaveBackdrop(drawer) {
        return drawer.mode !== 'side' || !!this._backdropOverride;
    }
    _isDrawerOpen(drawer) {
        return drawer != null && drawer.opened;
    }
}
NovoLayoutContainer.ɵfac = function NovoLayoutContainer_Factory(t) { return new (t || NovoLayoutContainer)(i0.ɵɵdirectiveInject(i1.Directionality, 8), i0.ɵɵdirectiveInject(i0.ElementRef), i0.ɵɵdirectiveInject(i0.NgZone), i0.ɵɵdirectiveInject(i0.ChangeDetectorRef), i0.ɵɵdirectiveInject(i2.ViewportRuler), i0.ɵɵdirectiveInject(NOVO_LAYOUT_DEFAULT_AUTOSIZE), i0.ɵɵdirectiveInject(ANIMATION_MODULE_TYPE, 8)); };
NovoLayoutContainer.ɵcmp = i0.ɵɵdefineComponent({ type: NovoLayoutContainer, selectors: [["novo-layout-container"]], contentQueries: function NovoLayoutContainer_ContentQueries(rf, ctx, dirIndex) { if (rf & 1) {
        i0.ɵɵcontentQuery(dirIndex, NovoLayoutContent, true);
        i0.ɵɵcontentQuery(dirIndex, NovoSidenavComponent, true);
    } if (rf & 2) {
        var _t;
        i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx._content = _t.first);
        i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx._allDrawers = _t);
    } }, viewQuery: function NovoLayoutContainer_Query(rf, ctx) { if (rf & 1) {
        i0.ɵɵviewQuery(NovoLayoutContent, true);
    } if (rf & 2) {
        var _t;
        i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx._userContent = _t.first);
    } }, hostAttrs: [1, "novo-layout-container"], hostVars: 2, hostBindings: function NovoLayoutContainer_HostBindings(rf, ctx) { if (rf & 2) {
        i0.ɵɵclassProp("novo-layout-container-explicit-backdrop", ctx._backdropOverride);
    } }, inputs: { autosize: "autosize", hasBackdrop: "hasBackdrop" }, outputs: { backdropClick: "backdropClick" }, exportAs: ["novoLayoutContainer"], features: [i0.ɵɵProvidersFeature([
            {
                provide: NOVO_LAYOUT_CONTAINER,
                useExisting: NovoLayoutContainer,
            },
        ])], ngContentSelectors: _c1, decls: 4, vars: 2, consts: [["class", "novo-drawer-backdrop", 3, "novo-drawer-shown", "click", 4, "ngIf"], ["cdkScrollable", "", 4, "ngIf"], [1, "novo-drawer-backdrop", 3, "click"], ["cdkScrollable", ""]], template: function NovoLayoutContainer_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵprojectionDef(_c0);
        i0.ɵɵtemplate(0, NovoLayoutContainer_div_0_Template, 1, 2, "div", 0);
        i0.ɵɵprojection(1);
        i0.ɵɵprojection(2, 1);
        i0.ɵɵtemplate(3, NovoLayoutContainer_novo_layout_content_3_Template, 2, 0, "novo-layout-content", 1);
    } if (rf & 2) {
        i0.ɵɵproperty("ngIf", ctx.hasBackdrop);
        i0.ɵɵadvance(3);
        i0.ɵɵproperty("ngIf", !ctx._content);
    } }, styles: ["@-webkit-keyframes rotate{0%{transform:rotate(0deg)}75%{transform:rotate(200deg)}to{transform:rotate(180deg)}}@keyframes rotate{0%{transform:rotate(0deg)}75%{transform:rotate(200deg)}to{transform:rotate(180deg)}}@-webkit-keyframes half-rotate{0%{transform:rotate(45deg)}75%{transform:rotate(100deg)}to{transform:rotate(90deg)}}@keyframes half-rotate{0%{transform:rotate(45deg)}75%{transform:rotate(100deg)}to{transform:rotate(90deg)}}@-webkit-keyframes rotateBack{0%{transform:rotate(90deg)}to{transform:rotate(0deg)}}@keyframes rotateBack{0%{transform:rotate(90deg)}to{transform:rotate(0deg)}}@-webkit-keyframes show{0%{opacity:0;transform:translateX(-100%)}75%{transform:translateX(0)}to{opacity:1;transform:translateX(0)}}@keyframes show{0%{opacity:0;transform:translateX(-100%)}75%{transform:translateX(0)}to{opacity:1;transform:translateX(0)}}.novo-layout-container{-webkit-overflow-scrolling:touch;box-sizing:border-box;display:block;height:100%;overflow:hidden;position:relative;z-index:1}.novo-layout-container[fullscreen].novo-layout-container-has-open{overflow:hidden}.novo-layout-container.novo-layout-container-explicit-backdrop .novo-drawer-side{z-index:3}.ng-animate-disabled .novo-layout-container .novo-drawer-backdrop,.ng-animate-disabled .novo-layout-container .novo-layout-content,.novo-layout-container.ng-animate-disabled .novo-drawer-backdrop,.novo-layout-container.ng-animate-disabled .novo-layout-content{transition:none}.novo-drawer-backdrop{background:#000;bottom:0;display:block;left:0;opacity:.5;position:absolute;right:0;top:0;visibility:hidden;z-index:3}.novo-drawer-backdrop.novo-drawer-shown{visibility:visible}.novo-drawer-transition .novo-drawer-backdrop{transition-duration:.1s;transition-property:background-color,visibility;transition-timing-function:ease-out}.novo-layout-content{display:block;height:100%;overflow:auto;position:relative;z-index:1}.novo-drawer-transition .novo-layout-content{transition-duration:.1s;transition-property:transform,margin-left,margin-right;transition-timing-function:ease-out}"], encapsulation: 2, changeDetection: 0 });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(NovoLayoutContainer, [{
        type: Component,
        args: [{
                selector: 'novo-layout-container',
                exportAs: 'novoLayoutContainer',
                templateUrl: './layout-container.component.html',
                styleUrls: ['./layout-container.component.scss'],
                host: {
                    class: 'novo-layout-container',
                    '[class.novo-layout-container-explicit-backdrop]': '_backdropOverride',
                },
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.None,
                providers: [
                    {
                        provide: NOVO_LAYOUT_CONTAINER,
                        useExisting: NovoLayoutContainer,
                    },
                ],
            }]
    }], function () { return [{ type: i1.Directionality, decorators: [{
                type: Optional
            }] }, { type: i0.ElementRef }, { type: i0.NgZone }, { type: i0.ChangeDetectorRef }, { type: i2.ViewportRuler }, { type: undefined, decorators: [{
                type: Inject,
                args: [NOVO_LAYOUT_DEFAULT_AUTOSIZE]
            }] }, { type: undefined, decorators: [{
                type: Optional
            }, {
                type: Inject,
                args: [ANIMATION_MODULE_TYPE]
            }] }]; }, { _allDrawers: [{
            type: ContentChildren,
            args: [NovoSidenavComponent, {
                    // We need to use `descendants: true`, because Ivy will no longer match
                    // indirect descendants if it's left as false.
                    descendants: true,
                }]
        }], _content: [{
            type: ContentChild,
            args: [NovoLayoutContent]
        }], _userContent: [{
            type: ViewChild,
            args: [NovoLayoutContent]
        }], autosize: [{
            type: Input
        }], hasBackdrop: [{
            type: Input
        }], backdropClick: [{
            type: Output
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGF5b3V0LWNvbnRhaW5lci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiL2hvbWUvdHJhdmlzL2J1aWxkL2J1bGxob3JuL25vdm8tZWxlbWVudHMvcHJvamVjdHMvbm92by1lbGVtZW50cy9zcmMvIiwic291cmNlcyI6WyJlbGVtZW50cy9sYXlvdXQvY29udGFpbmVyL2xheW91dC1jb250YWluZXIuY29tcG9uZW50LnRzIiwiZWxlbWVudHMvbGF5b3V0L2NvbnRhaW5lci9sYXlvdXQtY29udGFpbmVyLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUNuRCxPQUFPLEVBQWdCLHFCQUFxQixFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFDNUUsT0FBTyxFQUFpQixhQUFhLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUNwRSxPQUFPLEVBRUwsdUJBQXVCLEVBQ3ZCLGlCQUFpQixFQUNqQixTQUFTLEVBQ1QsWUFBWSxFQUNaLGVBQWUsRUFFZixVQUFVLEVBQ1YsWUFBWSxFQUNaLE1BQU0sRUFDTixLQUFLLEVBQ0wsTUFBTSxFQUVOLFFBQVEsRUFDUixNQUFNLEVBQ04sU0FBUyxFQUNULFNBQVMsRUFDVCxpQkFBaUIsR0FDbEIsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sc0NBQXNDLENBQUM7QUFDN0UsT0FBTyxFQUFFLEtBQUssRUFBRSxPQUFPLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDdEMsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLElBQUksRUFBRSxTQUFTLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUNsRixPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxxQ0FBcUMsQ0FBQztBQUN4RSxPQUFPLEVBQUUscUJBQXFCLEVBQUUsNEJBQTRCLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUMxRixP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QUFDO2dCQUNULFFBQVEsRUFBRSx1QkFBdUI7Z0JBQ2pDLFFBQVEsRUFBRSxxQkFBcUI7Z0JBQy9CLFdBQVcsRUFBRSxtQ0FBbUM7Z0JBQ2hELFNBQVMsRUFBRSxDQUFDLG1DQUFtQyxDQUFDO2dCQUNoRCxJQUFJLEVBQUU7b0JBQ0osS0FBSyxFQUFFLHVCQUF1QjtvQkFDOUIsaURBQWlELEVBQUUsbUJBQW1CO2lCQUN2RTtnQkFDRCxlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTtnQkFDL0MsYUFBYSxFQUFFLGlCQUFpQixDQUFDLElBQUk7Z0JBQ3JDLFNBQVMsRUFBRTtvQkFDVDt3QkFDRSxPQUFPLEVBQUUscUJBQXFCO3dCQUM5QixXQUFXLEVBQUUsbUJBQW1CO3FCQUNqQztpQkFDRjthQUNGOztzQkFrR0ksUUFBUTs7c0JBS1IsTUFBTTt1QkFBQyw0QkFBNEI7O3NCQUNuQyxRQUFROztzQkFBSSxNQUFNO3VCQUFDLHFCQUFxQjt3QkFqRzNDLFdBQVc7a0JBTFYsZUFBZTttQkFBQyxvQkFBb0IsRUFBRTtvQkFDckMsdUVBQXVFO29CQUN2RSw4Q0FBOEM7b0JBQzlDLFdBQVcsRUFBRSxJQUFJO2lCQUNsQjtZQUdnQyxRQUFRO2tCQUF4QyxZQUFZO21CQUFDLGlCQUFpQjtZQUtELFlBQVk7a0JBQXpDLFNBQVM7bUJBQUMsaUJBQWlCO1lBcUJ4QixRQUFRO2tCQURYLEtBQUs7WUFlRixXQUFXO2tCQURkLEtBQUs7WUFjYSxhQUFhO2tCQUEvQixNQUFNIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQW5pbWF0aW9uRXZlbnQgfSBmcm9tICdAYW5ndWxhci9hbmltYXRpb25zJztcbmltcG9ydCB7IERpcmVjdGlvbmFsaXR5IH0gZnJvbSAnQGFuZ3VsYXIvY2RrL2JpZGknO1xuaW1wb3J0IHsgQm9vbGVhbklucHV0LCBjb2VyY2VCb29sZWFuUHJvcGVydHkgfSBmcm9tICdAYW5ndWxhci9jZGsvY29lcmNpb24nO1xuaW1wb3J0IHsgQ2RrU2Nyb2xsYWJsZSwgVmlld3BvcnRSdWxlciB9IGZyb20gJ0Bhbmd1bGFyL2Nkay9vdmVybGF5JztcbmltcG9ydCB7XG4gIEFmdGVyQ29udGVudEluaXQsXG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxuICBDaGFuZ2VEZXRlY3RvclJlZixcbiAgQ29tcG9uZW50LFxuICBDb250ZW50Q2hpbGQsXG4gIENvbnRlbnRDaGlsZHJlbixcbiAgRG9DaGVjayxcbiAgRWxlbWVudFJlZixcbiAgRXZlbnRFbWl0dGVyLFxuICBJbmplY3QsXG4gIElucHV0LFxuICBOZ1pvbmUsXG4gIE9uRGVzdHJveSxcbiAgT3B0aW9uYWwsXG4gIE91dHB1dCxcbiAgUXVlcnlMaXN0LFxuICBWaWV3Q2hpbGQsXG4gIFZpZXdFbmNhcHN1bGF0aW9uLFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEFOSU1BVElPTl9NT0RVTEVfVFlQRSB9IGZyb20gJ0Bhbmd1bGFyL3BsYXRmb3JtLWJyb3dzZXIvYW5pbWF0aW9ucyc7XG5pbXBvcnQgeyBtZXJnZSwgU3ViamVjdCB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgZGVib3VuY2VUaW1lLCBmaWx0ZXIsIHN0YXJ0V2l0aCwgdGFrZSwgdGFrZVVudGlsIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHsgTm92b0xheW91dENvbnRlbnQgfSBmcm9tICcuLi9jb250ZW50L2xheW91dC1jb250ZW50LmNvbXBvbmVudCc7XG5pbXBvcnQgeyBOT1ZPX0xBWU9VVF9DT05UQUlORVIsIE5PVk9fTEFZT1VUX0RFRkFVTFRfQVVUT1NJWkUgfSBmcm9tICcuLi9sYXlvdXQuY29uc3RhbnRzJztcbmltcG9ydCB7IE5vdm9TaWRlbmF2Q29tcG9uZW50IH0gZnJvbSAnLi4vc2lkZW5hdi9zaWRlbmF2LmNvbXBvbmVudCc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ25vdm8tbGF5b3V0LWNvbnRhaW5lcicsXG4gIGV4cG9ydEFzOiAnbm92b0xheW91dENvbnRhaW5lcicsXG4gIHRlbXBsYXRlVXJsOiAnLi9sYXlvdXQtY29udGFpbmVyLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vbGF5b3V0LWNvbnRhaW5lci5jb21wb25lbnQuc2NzcyddLFxuICBob3N0OiB7XG4gICAgY2xhc3M6ICdub3ZvLWxheW91dC1jb250YWluZXInLFxuICAgICdbY2xhc3Mubm92by1sYXlvdXQtY29udGFpbmVyLWV4cGxpY2l0LWJhY2tkcm9wXSc6ICdfYmFja2Ryb3BPdmVycmlkZScsXG4gIH0sXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxuICBwcm92aWRlcnM6IFtcbiAgICB7XG4gICAgICBwcm92aWRlOiBOT1ZPX0xBWU9VVF9DT05UQUlORVIsXG4gICAgICB1c2VFeGlzdGluZzogTm92b0xheW91dENvbnRhaW5lcixcbiAgICB9LFxuICBdLFxufSlcbmV4cG9ydCBjbGFzcyBOb3ZvTGF5b3V0Q29udGFpbmVyIGltcGxlbWVudHMgQWZ0ZXJDb250ZW50SW5pdCwgRG9DaGVjaywgT25EZXN0cm95IHtcbiAgQENvbnRlbnRDaGlsZHJlbihOb3ZvU2lkZW5hdkNvbXBvbmVudCwge1xuICAgIC8vIFdlIG5lZWQgdG8gdXNlIGBkZXNjZW5kYW50czogdHJ1ZWAsIGJlY2F1c2UgSXZ5IHdpbGwgbm8gbG9uZ2VyIG1hdGNoXG4gICAgLy8gaW5kaXJlY3QgZGVzY2VuZGFudHMgaWYgaXQncyBsZWZ0IGFzIGZhbHNlLlxuICAgIGRlc2NlbmRhbnRzOiB0cnVlLFxuICB9KVxuICBfYWxsRHJhd2VyczogUXVlcnlMaXN0PE5vdm9TaWRlbmF2Q29tcG9uZW50PjtcblxuICBAQ29udGVudENoaWxkKE5vdm9MYXlvdXRDb250ZW50KSBfY29udGVudDogTm92b0xheW91dENvbnRlbnQ7XG5cbiAgLyoqIERyYXdlcnMgdGhhdCBiZWxvbmcgdG8gdGhpcyBjb250YWluZXIuICovXG4gIF9kcmF3ZXJzID0gbmV3IFF1ZXJ5TGlzdDxOb3ZvU2lkZW5hdkNvbXBvbmVudD4oKTtcblxuICBAVmlld0NoaWxkKE5vdm9MYXlvdXRDb250ZW50KSBfdXNlckNvbnRlbnQ6IE5vdm9MYXlvdXRDb250ZW50O1xuXG4gIC8qKiBUaGUgZHJhd2VyIGNoaWxkIHdpdGggdGhlIGBzdGFydGAgcG9zaXRpb24uICovXG4gIGdldCBzdGFydCgpOiBOb3ZvU2lkZW5hdkNvbXBvbmVudCB8IG51bGwge1xuICAgIHJldHVybiB0aGlzLl9zdGFydDtcbiAgfVxuXG4gIC8qKiBUaGUgZHJhd2VyIGNoaWxkIHdpdGggdGhlIGBlbmRgIHBvc2l0aW9uLiAqL1xuICBnZXQgZW5kKCk6IE5vdm9TaWRlbmF2Q29tcG9uZW50IHwgbnVsbCB7XG4gICAgcmV0dXJuIHRoaXMuX2VuZDtcbiAgfVxuXG4gIC8qKlxuICAgKiBXaGV0aGVyIHRvIGF1dG9tYXRpY2FsbHkgcmVzaXplIHRoZSBjb250YWluZXIgd2hlbmV2ZXJcbiAgICogdGhlIHNpemUgb2YgYW55IG9mIGl0cyBkcmF3ZXJzIGNoYW5nZXMuXG4gICAqXG4gICAqICoqVXNlIGF0IHlvdXIgb3duIHJpc2shKiogRW5hYmxpbmcgdGhpcyBvcHRpb24gY2FuIGNhdXNlIGxheW91dCB0aHJhc2hpbmcgYnkgbWVhc3VyaW5nXG4gICAqIHRoZSBkcmF3ZXJzIG9uIGV2ZXJ5IGNoYW5nZSBkZXRlY3Rpb24gY3ljbGUuIENhbiBiZSBjb25maWd1cmVkIGdsb2JhbGx5IHZpYSB0aGVcbiAgICogYE1BVF9EUkFXRVJfREVGQVVMVF9BVVRPU0laRWAgdG9rZW4uXG4gICAqL1xuICBASW5wdXQoKVxuICBnZXQgYXV0b3NpemUoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuX2F1dG9zaXplO1xuICB9XG4gIHNldCBhdXRvc2l6ZSh2YWx1ZTogYm9vbGVhbikge1xuICAgIHRoaXMuX2F1dG9zaXplID0gY29lcmNlQm9vbGVhblByb3BlcnR5KHZhbHVlKTtcbiAgfVxuICBwcml2YXRlIF9hdXRvc2l6ZTogYm9vbGVhbjtcblxuICAvKipcbiAgICogV2hldGhlciB0aGUgZHJhd2VyIGNvbnRhaW5lciBzaG91bGQgaGF2ZSBhIGJhY2tkcm9wIHdoaWxlIG9uZSBvZiB0aGUgc2lkZW5hdnMgaXMgb3Blbi5cbiAgICogSWYgZXhwbGljaXRseSBzZXQgdG8gYHRydWVgLCB0aGUgYmFja2Ryb3Agd2lsbCBiZSBlbmFibGVkIGZvciBkcmF3ZXJzIGluIHRoZSBgc2lkZWBcbiAgICogbW9kZSBhcyB3ZWxsLlxuICAgKi9cbiAgQElucHV0KClcbiAgZ2V0IGhhc0JhY2tkcm9wKCkge1xuICAgIGlmICh0aGlzLl9iYWNrZHJvcE92ZXJyaWRlID09IG51bGwpIHtcbiAgICAgIHJldHVybiAhdGhpcy5fc3RhcnQgfHwgdGhpcy5fc3RhcnQubW9kZSAhPT0gJ3NpZGUnIHx8ICF0aGlzLl9lbmQgfHwgdGhpcy5fZW5kLm1vZGUgIT09ICdzaWRlJztcbiAgICB9XG5cbiAgICByZXR1cm4gdGhpcy5fYmFja2Ryb3BPdmVycmlkZTtcbiAgfVxuICBzZXQgaGFzQmFja2Ryb3AodmFsdWU6IGFueSkge1xuICAgIHRoaXMuX2JhY2tkcm9wT3ZlcnJpZGUgPSB2YWx1ZSA9PSBudWxsID8gbnVsbCA6IGNvZXJjZUJvb2xlYW5Qcm9wZXJ0eSh2YWx1ZSk7XG4gIH1cbiAgX2JhY2tkcm9wT3ZlcnJpZGU6IGJvb2xlYW4gfCBudWxsO1xuXG4gIC8qKiBFdmVudCBlbWl0dGVkIHdoZW4gdGhlIGRyYXdlciBiYWNrZHJvcCBpcyBjbGlja2VkLiAqL1xuICBAT3V0cHV0KCkgcmVhZG9ubHkgYmFja2Ryb3BDbGljazogRXZlbnRFbWl0dGVyPHZvaWQ+ID0gbmV3IEV2ZW50RW1pdHRlcjx2b2lkPigpO1xuXG4gIC8qKiBUaGUgZHJhd2VyIGF0IHRoZSBzdGFydC9lbmQgcG9zaXRpb24sIGluZGVwZW5kZW50IG9mIGRpcmVjdGlvbi4gKi9cbiAgcHJpdmF0ZSBfc3RhcnQ6IE5vdm9TaWRlbmF2Q29tcG9uZW50IHwgbnVsbDtcbiAgcHJpdmF0ZSBfZW5kOiBOb3ZvU2lkZW5hdkNvbXBvbmVudCB8IG51bGw7XG5cbiAgLyoqXG4gICAqIFRoZSBkcmF3ZXIgYXQgdGhlIGxlZnQvcmlnaHQuIFdoZW4gZGlyZWN0aW9uIGNoYW5nZXMsIHRoZXNlIHdpbGwgY2hhbmdlIGFzIHdlbGwuXG4gICAqIFRoZXkncmUgdXNlZCBhcyBhbGlhc2VzIGZvciB0aGUgYWJvdmUgdG8gc2V0IHRoZSBsZWZ0L3JpZ2h0IHN0eWxlIHByb3Blcmx5LlxuICAgKiBJbiBMVFIsIF9sZWZ0ID09IF9zdGFydCBhbmQgX3JpZ2h0ID09IF9lbmQuXG4gICAqIEluIFJUTCwgX2xlZnQgPT0gX2VuZCBhbmQgX3JpZ2h0ID09IF9zdGFydC5cbiAgICovXG4gIHByaXZhdGUgX2xlZnQ6IE5vdm9TaWRlbmF2Q29tcG9uZW50IHwgbnVsbDtcbiAgcHJpdmF0ZSBfcmlnaHQ6IE5vdm9TaWRlbmF2Q29tcG9uZW50IHwgbnVsbDtcblxuICAvKiogRW1pdHMgd2hlbiB0aGUgY29tcG9uZW50IGlzIGRlc3Ryb3llZC4gKi9cbiAgcHJpdmF0ZSByZWFkb25seSBfZGVzdHJveWVkID0gbmV3IFN1YmplY3Q8dm9pZD4oKTtcblxuICAvKiogRW1pdHMgb24gZXZlcnkgbmdEb0NoZWNrLiBVc2VkIGZvciBkZWJvdW5jaW5nIHJlZmxvd3MuICovXG4gIHByaXZhdGUgcmVhZG9ubHkgX2RvQ2hlY2tTdWJqZWN0ID0gbmV3IFN1YmplY3Q8dm9pZD4oKTtcblxuICAvKipcbiAgICogTWFyZ2lucyB0byBiZSBhcHBsaWVkIHRvIHRoZSBjb250ZW50LiBUaGVzZSBhcmUgdXNlZCB0byBwdXNoIC8gc2hyaW5rIHRoZSBkcmF3ZXIgY29udGVudCB3aGVuIGFcbiAgICogZHJhd2VyIGlzIG9wZW4uIFdlIHVzZSBtYXJnaW4gcmF0aGVyIHRoYW4gdHJhbnNmb3JtIGV2ZW4gZm9yIHB1c2ggbW9kZSBiZWNhdXNlIHRyYW5zZm9ybSBicmVha3NcbiAgICogZml4ZWQgcG9zaXRpb24gZWxlbWVudHMgaW5zaWRlIG9mIHRoZSB0cmFuc2Zvcm1lZCBlbGVtZW50LlxuICAgKi9cbiAgX2NvbnRlbnRNYXJnaW5zOiB7IGxlZnQ6IG51bWJlciB8IG51bGw7IHJpZ2h0OiBudW1iZXIgfCBudWxsIH0gPSB7IGxlZnQ6IG51bGwsIHJpZ2h0OiBudWxsIH07XG5cbiAgcmVhZG9ubHkgX2NvbnRlbnRNYXJnaW5DaGFuZ2VzID0gbmV3IFN1YmplY3Q8eyBsZWZ0OiBudW1iZXIgfCBudWxsOyByaWdodDogbnVtYmVyIHwgbnVsbCB9PigpO1xuXG4gIC8qKiBSZWZlcmVuY2UgdG8gdGhlIENka1Njcm9sbGFibGUgaW5zdGFuY2UgdGhhdCB3cmFwcyB0aGUgc2Nyb2xsYWJsZSBjb250ZW50LiAqL1xuICBnZXQgc2Nyb2xsYWJsZSgpOiBDZGtTY3JvbGxhYmxlIHtcbiAgICByZXR1cm4gdGhpcy5fdXNlckNvbnRlbnQgfHwgdGhpcy5fY29udGVudDtcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKFxuICAgIEBPcHRpb25hbCgpIHByaXZhdGUgX2RpcjogRGlyZWN0aW9uYWxpdHksXG4gICAgcHJpdmF0ZSBfZWxlbWVudDogRWxlbWVudFJlZjxIVE1MRWxlbWVudD4sXG4gICAgcHJpdmF0ZSBfbmdab25lOiBOZ1pvbmUsXG4gICAgcHJpdmF0ZSBfY2hhbmdlRGV0ZWN0b3JSZWY6IENoYW5nZURldGVjdG9yUmVmLFxuICAgIHZpZXdwb3J0UnVsZXI6IFZpZXdwb3J0UnVsZXIsXG4gICAgQEluamVjdChOT1ZPX0xBWU9VVF9ERUZBVUxUX0FVVE9TSVpFKSBkZWZhdWx0QXV0b3NpemUgPSBmYWxzZSxcbiAgICBAT3B0aW9uYWwoKSBASW5qZWN0KEFOSU1BVElPTl9NT0RVTEVfVFlQRSkgcHJpdmF0ZSBfYW5pbWF0aW9uTW9kZT86IHN0cmluZyxcbiAgKSB7XG4gICAgLy8gSWYgYSBgRGlyYCBkaXJlY3RpdmUgZXhpc3RzIHVwIHRoZSB0cmVlLCBsaXN0ZW4gZGlyZWN0aW9uIGNoYW5nZXNcbiAgICAvLyBhbmQgdXBkYXRlIHRoZSBsZWZ0L3JpZ2h0IHByb3BlcnRpZXMgdG8gcG9pbnQgdG8gdGhlIHByb3BlciBzdGFydC9lbmQuXG4gICAgaWYgKF9kaXIpIHtcbiAgICAgIF9kaXIuY2hhbmdlLnBpcGUodGFrZVVudGlsKHRoaXMuX2Rlc3Ryb3llZCkpLnN1YnNjcmliZSgoKSA9PiB7XG4gICAgICAgIHRoaXMuX3ZhbGlkYXRlRHJhd2VycygpO1xuICAgICAgICB0aGlzLnVwZGF0ZUNvbnRlbnRNYXJnaW5zKCk7XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICAvLyBTaW5jZSB0aGUgbWluaW11bSB3aWR0aCBvZiB0aGUgc2lkZW5hdiBkZXBlbmRzIG9uIHRoZSB2aWV3cG9ydCB3aWR0aCxcbiAgICAvLyB3ZSBuZWVkIHRvIHJlY29tcHV0ZSB0aGUgbWFyZ2lucyBpZiB0aGUgdmlld3BvcnQgY2hhbmdlcy5cbiAgICB2aWV3cG9ydFJ1bGVyXG4gICAgICAuY2hhbmdlKClcbiAgICAgIC5waXBlKHRha2VVbnRpbCh0aGlzLl9kZXN0cm95ZWQpKVxuICAgICAgLnN1YnNjcmliZSgoKSA9PiB0aGlzLnVwZGF0ZUNvbnRlbnRNYXJnaW5zKCkpO1xuXG4gICAgdGhpcy5fYXV0b3NpemUgPSBkZWZhdWx0QXV0b3NpemU7XG4gIH1cblxuICBuZ0FmdGVyQ29udGVudEluaXQoKSB7XG4gICAgdGhpcy5fYWxsRHJhd2Vycy5jaGFuZ2VzXG4gICAgICAucGlwZShzdGFydFdpdGgodGhpcy5fYWxsRHJhd2VycyksIHRha2VVbnRpbCh0aGlzLl9kZXN0cm95ZWQpKVxuICAgICAgLnN1YnNjcmliZSgoZHJhd2VyOiBRdWVyeUxpc3Q8Tm92b1NpZGVuYXZDb21wb25lbnQ+KSA9PiB7XG4gICAgICAgIHRoaXMuX2RyYXdlcnMucmVzZXQoZHJhd2VyLmZpbHRlcigoaXRlbSkgPT4gIWl0ZW0uX2NvbnRhaW5lciB8fCBpdGVtLl9jb250YWluZXIgPT09IHRoaXMpKTtcbiAgICAgICAgdGhpcy5fZHJhd2Vycy5ub3RpZnlPbkNoYW5nZXMoKTtcbiAgICAgIH0pO1xuXG4gICAgdGhpcy5fZHJhd2Vycy5jaGFuZ2VzLnBpcGUoc3RhcnRXaXRoKG51bGwpKS5zdWJzY3JpYmUoKCkgPT4ge1xuICAgICAgdGhpcy5fdmFsaWRhdGVEcmF3ZXJzKCk7XG5cbiAgICAgIHRoaXMuX2RyYXdlcnMuZm9yRWFjaCgoZHJhd2VyOiBOb3ZvU2lkZW5hdkNvbXBvbmVudCkgPT4ge1xuICAgICAgICB0aGlzLl93YXRjaERyYXdlclRvZ2dsZShkcmF3ZXIpO1xuICAgICAgICB0aGlzLl93YXRjaERyYXdlclBvc2l0aW9uKGRyYXdlcik7XG4gICAgICAgIHRoaXMuX3dhdGNoRHJhd2VyTW9kZShkcmF3ZXIpO1xuICAgICAgfSk7XG5cbiAgICAgIGlmICghdGhpcy5fZHJhd2Vycy5sZW5ndGggfHwgdGhpcy5faXNEcmF3ZXJPcGVuKHRoaXMuX3N0YXJ0KSB8fCB0aGlzLl9pc0RyYXdlck9wZW4odGhpcy5fZW5kKSkge1xuICAgICAgICB0aGlzLnVwZGF0ZUNvbnRlbnRNYXJnaW5zKCk7XG4gICAgICB9XG5cbiAgICAgIHRoaXMuX2NoYW5nZURldGVjdG9yUmVmLm1hcmtGb3JDaGVjaygpO1xuICAgIH0pO1xuXG4gICAgLy8gQXZvaWQgaGl0dGluZyB0aGUgTmdab25lIHRocm91Z2ggdGhlIGRlYm91bmNlIHRpbWVvdXQuXG4gICAgdGhpcy5fbmdab25lLnJ1bk91dHNpZGVBbmd1bGFyKCgpID0+IHtcbiAgICAgIHRoaXMuX2RvQ2hlY2tTdWJqZWN0XG4gICAgICAgIC5waXBlKFxuICAgICAgICAgIGRlYm91bmNlVGltZSgxMCksIC8vIEFyYml0cmFyeSBkZWJvdW5jZSB0aW1lLCBsZXNzIHRoYW4gYSBmcmFtZSBhdCA2MGZwc1xuICAgICAgICAgIHRha2VVbnRpbCh0aGlzLl9kZXN0cm95ZWQpLFxuICAgICAgICApXG4gICAgICAgIC5zdWJzY3JpYmUoKCkgPT4gdGhpcy51cGRhdGVDb250ZW50TWFyZ2lucygpKTtcbiAgICB9KTtcbiAgfVxuXG4gIG5nT25EZXN0cm95KCkge1xuICAgIHRoaXMuX2NvbnRlbnRNYXJnaW5DaGFuZ2VzLmNvbXBsZXRlKCk7XG4gICAgdGhpcy5fZG9DaGVja1N1YmplY3QuY29tcGxldGUoKTtcbiAgICB0aGlzLl9kcmF3ZXJzLmRlc3Ryb3koKTtcbiAgICB0aGlzLl9kZXN0cm95ZWQubmV4dCgpO1xuICAgIHRoaXMuX2Rlc3Ryb3llZC5jb21wbGV0ZSgpO1xuICB9XG5cbiAgLyoqIENhbGxzIGBvcGVuYCBvZiBib3RoIHN0YXJ0IGFuZCBlbmQgZHJhd2VycyAqL1xuICBvcGVuKCk6IHZvaWQge1xuICAgIHRoaXMuX2RyYXdlcnMuZm9yRWFjaCgoZHJhd2VyKSA9PiBkcmF3ZXIub3BlbigpKTtcbiAgfVxuXG4gIC8qKiBDYWxscyBgY2xvc2VgIG9mIGJvdGggc3RhcnQgYW5kIGVuZCBkcmF3ZXJzICovXG4gIGNsb3NlKCk6IHZvaWQge1xuICAgIHRoaXMuX2RyYXdlcnMuZm9yRWFjaCgoZHJhd2VyKSA9PiBkcmF3ZXIuY2xvc2UoKSk7XG4gIH1cblxuICAvKipcbiAgICogUmVjYWxjdWxhdGVzIGFuZCB1cGRhdGVzIHRoZSBpbmxpbmUgc3R5bGVzIGZvciB0aGUgY29udGVudC4gTm90ZSB0aGF0IHRoaXMgc2hvdWxkIGJlIHVzZWRcbiAgICogc3BhcmluZ2x5LCBiZWNhdXNlIGl0IGNhdXNlcyBhIHJlZmxvdy5cbiAgICovXG4gIHVwZGF0ZUNvbnRlbnRNYXJnaW5zKCkge1xuICAgIC8vIDEuIEZvciBkcmF3ZXJzIGluIGBvdmVyYCBtb2RlLCB0aGV5IGRvbid0IGFmZmVjdCB0aGUgY29udGVudC5cbiAgICAvLyAyLiBGb3IgZHJhd2VycyBpbiBgc2lkZWAgbW9kZSB0aGV5IHNob3VsZCBzaHJpbmsgdGhlIGNvbnRlbnQuIFdlIGRvIHRoaXMgYnkgYWRkaW5nIHRvIHRoZVxuICAgIC8vICAgIGxlZnQgbWFyZ2luIChmb3IgbGVmdCBkcmF3ZXIpIG9yIHJpZ2h0IG1hcmdpbiAoZm9yIHJpZ2h0IHRoZSBkcmF3ZXIpLlxuICAgIC8vIDMuIEZvciBkcmF3ZXJzIGluIGBwdXNoYCBtb2RlIHRoZSBzaG91bGQgc2hpZnQgdGhlIGNvbnRlbnQgd2l0aG91dCByZXNpemluZyBpdC4gV2UgZG8gdGhpcyBieVxuICAgIC8vICAgIGFkZGluZyB0byB0aGUgbGVmdCBvciByaWdodCBtYXJnaW4gYW5kIHNpbXVsdGFuZW91c2x5IHN1YnRyYWN0aW5nIHRoZSBzYW1lIGFtb3VudCBvZlxuICAgIC8vICAgIG1hcmdpbiBmcm9tIHRoZSBvdGhlciBzaWRlLlxuICAgIGxldCBsZWZ0ID0gMDtcbiAgICBsZXQgcmlnaHQgPSAwO1xuXG4gICAgaWYgKHRoaXMuX2xlZnQgJiYgdGhpcy5fbGVmdC5vcGVuZWQpIHtcbiAgICAgIGlmICh0aGlzLl9sZWZ0Lm1vZGUgPT09ICdzaWRlJykge1xuICAgICAgICBsZWZ0ICs9IHRoaXMuX2xlZnQuX2dldFdpZHRoKCk7XG4gICAgICB9IGVsc2UgaWYgKHRoaXMuX2xlZnQubW9kZSA9PT0gJ3B1c2gnKSB7XG4gICAgICAgIGNvbnN0IHdpZHRoID0gdGhpcy5fbGVmdC5fZ2V0V2lkdGgoKTtcbiAgICAgICAgbGVmdCArPSB3aWR0aDtcbiAgICAgICAgcmlnaHQgLT0gd2lkdGg7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKHRoaXMuX3JpZ2h0ICYmIHRoaXMuX3JpZ2h0Lm9wZW5lZCkge1xuICAgICAgaWYgKHRoaXMuX3JpZ2h0Lm1vZGUgPT09ICdzaWRlJykge1xuICAgICAgICByaWdodCArPSB0aGlzLl9yaWdodC5fZ2V0V2lkdGgoKTtcbiAgICAgIH0gZWxzZSBpZiAodGhpcy5fcmlnaHQubW9kZSA9PT0gJ3B1c2gnKSB7XG4gICAgICAgIGNvbnN0IHdpZHRoID0gdGhpcy5fcmlnaHQuX2dldFdpZHRoKCk7XG4gICAgICAgIHJpZ2h0ICs9IHdpZHRoO1xuICAgICAgICBsZWZ0IC09IHdpZHRoO1xuICAgICAgfVxuICAgIH1cblxuICAgIC8vIElmIGVpdGhlciBgcmlnaHRgIG9yIGBsZWZ0YCBpcyB6ZXJvLCBkb24ndCBzZXQgYSBzdHlsZSB0byB0aGUgZWxlbWVudC4gVGhpc1xuICAgIC8vIGFsbG93cyB1c2VycyB0byBzcGVjaWZ5IGEgY3VzdG9tIHNpemUgdmlhIENTUyBjbGFzcyBpbiBTU1Igc2NlbmFyaW9zIHdoZXJlIHRoZVxuICAgIC8vIG1lYXN1cmVkIHdpZHRocyB3aWxsIGFsd2F5cyBiZSB6ZXJvLiBOb3RlIHRoYXQgd2UgcmVzZXQgdG8gYG51bGxgIGhlcmUsIHJhdGhlclxuICAgIC8vIHRoYW4gYmVsb3csIGluIG9yZGVyIHRvIGVuc3VyZSB0aGF0IHRoZSB0eXBlcyBpbiB0aGUgYGlmYCBiZWxvdyBhcmUgY29uc2lzdGVudC5cbiAgICBsZWZ0ID0gbGVmdCB8fCBudWxsO1xuICAgIHJpZ2h0ID0gcmlnaHQgfHwgbnVsbDtcblxuICAgIGlmIChsZWZ0ICE9PSB0aGlzLl9jb250ZW50TWFyZ2lucy5sZWZ0IHx8IHJpZ2h0ICE9PSB0aGlzLl9jb250ZW50TWFyZ2lucy5yaWdodCkge1xuICAgICAgdGhpcy5fY29udGVudE1hcmdpbnMgPSB7IGxlZnQsIHJpZ2h0IH07XG5cbiAgICAgIC8vIFB1bGwgYmFjayBpbnRvIHRoZSBOZ1pvbmUgc2luY2UgaW4gc29tZSBjYXNlcyB3ZSBjb3VsZCBiZSBvdXRzaWRlLiBXZSBuZWVkIHRvIGJlIGNhcmVmdWxcbiAgICAgIC8vIHRvIGRvIGl0IG9ubHkgd2hlbiBzb21ldGhpbmcgY2hhbmdlZCwgb3RoZXJ3aXNlIHdlIGNhbiBlbmQgdXAgaGl0dGluZyB0aGUgem9uZSB0b28gb2Z0ZW4uXG4gICAgICB0aGlzLl9uZ1pvbmUucnVuKCgpID0+IHRoaXMuX2NvbnRlbnRNYXJnaW5DaGFuZ2VzLm5leHQodGhpcy5fY29udGVudE1hcmdpbnMpKTtcbiAgICB9XG4gIH1cblxuICBuZ0RvQ2hlY2soKSB7XG4gICAgLy8gSWYgdXNlcnMgb3B0ZWQgaW50byBhdXRvc2l6aW5nLCBkbyBhIGNoZWNrIGV2ZXJ5IGNoYW5nZSBkZXRlY3Rpb24gY3ljbGUuXG4gICAgaWYgKHRoaXMuX2F1dG9zaXplICYmIHRoaXMuX2lzUHVzaGVkKCkpIHtcbiAgICAgIC8vIFJ1biBvdXRzaWRlIHRoZSBOZ1pvbmUsIG90aGVyd2lzZSB0aGUgZGVib3VuY2VyIHdpbGwgdGhyb3cgdXMgaW50byBhbiBpbmZpbml0ZSBsb29wLlxuICAgICAgdGhpcy5fbmdab25lLnJ1bk91dHNpZGVBbmd1bGFyKCgpID0+IHRoaXMuX2RvQ2hlY2tTdWJqZWN0Lm5leHQoKSk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIFN1YnNjcmliZXMgdG8gZHJhd2VyIGV2ZW50cyBpbiBvcmRlciB0byBzZXQgYSBjbGFzcyBvbiB0aGUgbWFpbiBjb250YWluZXIgZWxlbWVudCB3aGVuIHRoZVxuICAgKiBkcmF3ZXIgaXMgb3BlbiBhbmQgdGhlIGJhY2tkcm9wIGlzIHZpc2libGUuIFRoaXMgZW5zdXJlcyBhbnkgb3ZlcmZsb3cgb24gdGhlIGNvbnRhaW5lciBlbGVtZW50XG4gICAqIGlzIHByb3Blcmx5IGhpZGRlbi5cbiAgICovXG4gIHByaXZhdGUgX3dhdGNoRHJhd2VyVG9nZ2xlKGRyYXdlcjogTm92b1NpZGVuYXZDb21wb25lbnQpOiB2b2lkIHtcbiAgICBkcmF3ZXIuX2FuaW1hdGlvblN0YXJ0ZWRcbiAgICAgIC5waXBlKFxuICAgICAgICBmaWx0ZXIoKGV2ZW50OiBBbmltYXRpb25FdmVudCkgPT4gZXZlbnQuZnJvbVN0YXRlICE9PSBldmVudC50b1N0YXRlKSxcbiAgICAgICAgdGFrZVVudGlsKHRoaXMuX2RyYXdlcnMuY2hhbmdlcyksXG4gICAgICApXG4gICAgICAuc3Vic2NyaWJlKChldmVudDogQW5pbWF0aW9uRXZlbnQpID0+IHtcbiAgICAgICAgLy8gU2V0IHRoZSB0cmFuc2l0aW9uIGNsYXNzIG9uIHRoZSBjb250YWluZXIgc28gdGhhdCB0aGUgYW5pbWF0aW9ucyBvY2N1ci4gVGhpcyBzaG91bGQgbm90XG4gICAgICAgIC8vIGJlIHNldCBpbml0aWFsbHkgYmVjYXVzZSBhbmltYXRpb25zIHNob3VsZCBvbmx5IGJlIHRyaWdnZXJlZCB2aWEgYSBjaGFuZ2UgaW4gc3RhdGUuXG4gICAgICAgIGlmIChldmVudC50b1N0YXRlICE9PSAnb3Blbi1pbnN0YW50JyAmJiB0aGlzLl9hbmltYXRpb25Nb2RlICE9PSAnTm9vcEFuaW1hdGlvbnMnKSB7XG4gICAgICAgICAgdGhpcy5fZWxlbWVudC5uYXRpdmVFbGVtZW50LmNsYXNzTGlzdC5hZGQoJ21hdC1kcmF3ZXItdHJhbnNpdGlvbicpO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy51cGRhdGVDb250ZW50TWFyZ2lucygpO1xuICAgICAgICB0aGlzLl9jaGFuZ2VEZXRlY3RvclJlZi5tYXJrRm9yQ2hlY2soKTtcbiAgICAgIH0pO1xuXG4gICAgaWYgKGRyYXdlci5tb2RlICE9PSAnc2lkZScpIHtcbiAgICAgIGRyYXdlci5vcGVuZWRDaGFuZ2UucGlwZSh0YWtlVW50aWwodGhpcy5fZHJhd2Vycy5jaGFuZ2VzKSkuc3Vic2NyaWJlKCgpID0+IHRoaXMuX3NldENvbnRhaW5lckNsYXNzKGRyYXdlci5vcGVuZWQpKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogU3Vic2NyaWJlcyB0byBkcmF3ZXIgb25Qb3NpdGlvbkNoYW5nZWQgZXZlbnQgaW4gb3JkZXIgdG9cbiAgICogcmUtdmFsaWRhdGUgZHJhd2VycyB3aGVuIHRoZSBwb3NpdGlvbiBjaGFuZ2VzLlxuICAgKi9cbiAgcHJpdmF0ZSBfd2F0Y2hEcmF3ZXJQb3NpdGlvbihkcmF3ZXI6IE5vdm9TaWRlbmF2Q29tcG9uZW50KTogdm9pZCB7XG4gICAgaWYgKCFkcmF3ZXIpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgLy8gTk9URTogV2UgbmVlZCB0byB3YWl0IGZvciB0aGUgbWljcm90YXNrIHF1ZXVlIHRvIGJlIGVtcHR5IGJlZm9yZSB2YWxpZGF0aW5nLFxuICAgIC8vIHNpbmNlIGJvdGggZHJhd2VycyBtYXkgYmUgc3dhcHBpbmcgcG9zaXRpb25zIGF0IHRoZSBzYW1lIHRpbWUuXG4gICAgZHJhd2VyLm9uUG9zaXRpb25DaGFuZ2VkLnBpcGUodGFrZVVudGlsKHRoaXMuX2RyYXdlcnMuY2hhbmdlcykpLnN1YnNjcmliZSgoKSA9PiB7XG4gICAgICB0aGlzLl9uZ1pvbmUub25NaWNyb3Rhc2tFbXB0eS5waXBlKHRha2UoMSkpLnN1YnNjcmliZSgoKSA9PiB7XG4gICAgICAgIHRoaXMuX3ZhbGlkYXRlRHJhd2VycygpO1xuICAgICAgfSk7XG4gICAgfSk7XG4gIH1cblxuICAvKiogU3Vic2NyaWJlcyB0byBjaGFuZ2VzIGluIGRyYXdlciBtb2RlIHNvIHdlIGNhbiBydW4gY2hhbmdlIGRldGVjdGlvbi4gKi9cbiAgcHJpdmF0ZSBfd2F0Y2hEcmF3ZXJNb2RlKGRyYXdlcjogTm92b1NpZGVuYXZDb21wb25lbnQpOiB2b2lkIHtcbiAgICBpZiAoZHJhd2VyKSB7XG4gICAgICBkcmF3ZXIuX21vZGVDaGFuZ2VkLnBpcGUodGFrZVVudGlsKG1lcmdlKHRoaXMuX2RyYXdlcnMuY2hhbmdlcywgdGhpcy5fZGVzdHJveWVkKSkpLnN1YnNjcmliZSgoKSA9PiB7XG4gICAgICAgIHRoaXMudXBkYXRlQ29udGVudE1hcmdpbnMoKTtcbiAgICAgICAgdGhpcy5fY2hhbmdlRGV0ZWN0b3JSZWYubWFya0ZvckNoZWNrKCk7XG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICAvKiogVG9nZ2xlcyB0aGUgJ21hdC1kcmF3ZXItb3BlbmVkJyBjbGFzcyBvbiB0aGUgbWFpbiAnbWF0LWRyYXdlci1jb250YWluZXInIGVsZW1lbnQuICovXG4gIHByaXZhdGUgX3NldENvbnRhaW5lckNsYXNzKGlzQWRkOiBib29sZWFuKTogdm9pZCB7XG4gICAgY29uc3QgY2xhc3NMaXN0ID0gdGhpcy5fZWxlbWVudC5uYXRpdmVFbGVtZW50LmNsYXNzTGlzdDtcbiAgICBjb25zdCBjbGFzc05hbWUgPSAnbWF0LWRyYXdlci1jb250YWluZXItaGFzLW9wZW4nO1xuXG4gICAgaWYgKGlzQWRkKSB7XG4gICAgICBjbGFzc0xpc3QuYWRkKGNsYXNzTmFtZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNsYXNzTGlzdC5yZW1vdmUoY2xhc3NOYW1lKTtcbiAgICB9XG4gIH1cblxuICAvKiogVmFsaWRhdGUgdGhlIHN0YXRlIG9mIHRoZSBkcmF3ZXIgY2hpbGRyZW4gY29tcG9uZW50cy4gKi9cbiAgcHJpdmF0ZSBfdmFsaWRhdGVEcmF3ZXJzKCkge1xuICAgIHRoaXMuX3N0YXJ0ID0gdGhpcy5fZW5kID0gbnVsbDtcblxuICAgIC8vIEVuc3VyZSB0aGF0IHdlIGhhdmUgYXQgbW9zdCBvbmUgc3RhcnQgYW5kIG9uZSBlbmQgZHJhd2VyLlxuICAgIHRoaXMuX2RyYXdlcnMuZm9yRWFjaCgoZHJhd2VyKSA9PiB7XG4gICAgICBpZiAoZHJhd2VyLnBvc2l0aW9uID09PSAnZW5kJykge1xuICAgICAgICBpZiAodGhpcy5fZW5kICE9IG51bGwpIHtcbiAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0R1cGxpY2F0aW9uIGRyYXdlcnMgYXQgZW5kJyk7XG4gICAgICAgICAgLy8gdGhyb3dNYXREdXBsaWNhdGVkRHJhd2VyRXJyb3IoJ2VuZCcpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuX2VuZCA9IGRyYXdlcjtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGlmICh0aGlzLl9zdGFydCAhPSBudWxsKSB7XG4gICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdEdXBsaWNhdGlvbiBkcmF3ZXJzIGF0IHN0YXJ0Jyk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5fc3RhcnQgPSBkcmF3ZXI7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICB0aGlzLl9yaWdodCA9IHRoaXMuX2xlZnQgPSBudWxsO1xuXG4gICAgLy8gRGV0ZWN0IGlmIHdlJ3JlIExUUiBvciBSVEwuXG4gICAgaWYgKHRoaXMuX2RpciAmJiB0aGlzLl9kaXIudmFsdWUgPT09ICdydGwnKSB7XG4gICAgICB0aGlzLl9sZWZ0ID0gdGhpcy5fZW5kO1xuICAgICAgdGhpcy5fcmlnaHQgPSB0aGlzLl9zdGFydDtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5fbGVmdCA9IHRoaXMuX3N0YXJ0O1xuICAgICAgdGhpcy5fcmlnaHQgPSB0aGlzLl9lbmQ7XG4gICAgfVxuICB9XG5cbiAgLyoqIFdoZXRoZXIgdGhlIGNvbnRhaW5lciBpcyBiZWluZyBwdXNoZWQgdG8gdGhlIHNpZGUgYnkgb25lIG9mIHRoZSBkcmF3ZXJzLiAqL1xuICBwcml2YXRlIF9pc1B1c2hlZCgpIHtcbiAgICByZXR1cm4gKHRoaXMuX2lzRHJhd2VyT3Blbih0aGlzLl9zdGFydCkgJiYgdGhpcy5fc3RhcnQubW9kZSAhPT0gJ292ZXInKSB8fCAodGhpcy5faXNEcmF3ZXJPcGVuKHRoaXMuX2VuZCkgJiYgdGhpcy5fZW5kLm1vZGUgIT09ICdvdmVyJyk7XG4gIH1cblxuICBfb25CYWNrZHJvcENsaWNrZWQoKSB7XG4gICAgdGhpcy5iYWNrZHJvcENsaWNrLmVtaXQoKTtcbiAgICB0aGlzLl9jbG9zZU1vZGFsRHJhd2Vyc1ZpYUJhY2tkcm9wKCk7XG4gIH1cblxuICBfY2xvc2VNb2RhbERyYXdlcnNWaWFCYWNrZHJvcCgpIHtcbiAgICAvLyBDbG9zZSBhbGwgb3BlbiBkcmF3ZXJzIHdoZXJlIGNsb3NpbmcgaXMgbm90IGRpc2FibGVkIGFuZCB0aGUgbW9kZSBpcyBub3QgYHNpZGVgLlxuICAgIFt0aGlzLl9zdGFydCwgdGhpcy5fZW5kXVxuICAgICAgLmZpbHRlcigoZHJhd2VyKSA9PiBkcmF3ZXIgJiYgIWRyYXdlci5kaXNhYmxlQ2xvc2UgJiYgdGhpcy5fY2FuSGF2ZUJhY2tkcm9wKGRyYXdlcikpXG4gICAgICAuZm9yRWFjaCgoZHJhd2VyKSA9PiBkcmF3ZXIuX2Nsb3NlVmlhQmFja2Ryb3BDbGljaygpKTtcbiAgfVxuXG4gIF9pc1Nob3dpbmdCYWNrZHJvcCgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gKFxuICAgICAgKHRoaXMuX2lzRHJhd2VyT3Blbih0aGlzLl9zdGFydCkgJiYgdGhpcy5fY2FuSGF2ZUJhY2tkcm9wKHRoaXMuX3N0YXJ0KSkgfHxcbiAgICAgICh0aGlzLl9pc0RyYXdlck9wZW4odGhpcy5fZW5kKSAmJiB0aGlzLl9jYW5IYXZlQmFja2Ryb3AodGhpcy5fZW5kKSlcbiAgICApO1xuICB9XG5cbiAgcHJpdmF0ZSBfY2FuSGF2ZUJhY2tkcm9wKGRyYXdlcjogTm92b1NpZGVuYXZDb21wb25lbnQpOiBib29sZWFuIHtcbiAgICByZXR1cm4gZHJhd2VyLm1vZGUgIT09ICdzaWRlJyB8fCAhIXRoaXMuX2JhY2tkcm9wT3ZlcnJpZGU7XG4gIH1cblxuICBwcml2YXRlIF9pc0RyYXdlck9wZW4oZHJhd2VyOiBOb3ZvU2lkZW5hdkNvbXBvbmVudCB8IG51bGwpOiBkcmF3ZXIgaXMgTm92b1NpZGVuYXZDb21wb25lbnQge1xuICAgIHJldHVybiBkcmF3ZXIgIT0gbnVsbCAmJiBkcmF3ZXIub3BlbmVkO1xuICB9XG5cbiAgc3RhdGljIG5nQWNjZXB0SW5wdXRUeXBlX2F1dG9zaXplOiBCb29sZWFuSW5wdXQ7XG4gIHN0YXRpYyBuZ0FjY2VwdElucHV0VHlwZV9oYXNCYWNrZHJvcDogQm9vbGVhbklucHV0O1xufVxuIiwiPGRpdiBjbGFzcz1cIm5vdm8tZHJhd2VyLWJhY2tkcm9wXCIgKGNsaWNrKT1cIl9vbkJhY2tkcm9wQ2xpY2tlZCgpXCIgKm5nSWY9XCJoYXNCYWNrZHJvcFwiXG4gIFtjbGFzcy5ub3ZvLWRyYXdlci1zaG93bl09XCJfaXNTaG93aW5nQmFja2Ryb3AoKVwiPjwvZGl2PlxuXG48bmctY29udGVudCBzZWxlY3Q9XCJub3ZvLXNpZGVuYXZcIj48L25nLWNvbnRlbnQ+XG5cbjxuZy1jb250ZW50IHNlbGVjdD1cIm5vdm8tbGF5b3V0LWNvbnRlbnRcIj5cbjwvbmctY29udGVudD5cblxuPG5vdm8tbGF5b3V0LWNvbnRlbnQgKm5nSWY9XCIhX2NvbnRlbnRcIiBjZGtTY3JvbGxhYmxlPlxuICA8bmctY29udGVudD48L25nLWNvbnRlbnQ+XG48L25vdm8tbGF5b3V0LWNvbnRlbnQ+Il19