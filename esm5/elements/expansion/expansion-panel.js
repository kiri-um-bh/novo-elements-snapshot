import { __extends } from "tslib";
import { CdkAccordionItem } from '@angular/cdk/accordion';
import { coerceBooleanProperty } from '@angular/cdk/coercion';
import { UniqueSelectionDispatcher } from '@angular/cdk/collections';
import { TemplatePortal } from '@angular/cdk/portal';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ContentChild, Directive, EventEmitter, Host, Input, Output, Optional, ViewContainerRef, ViewEncapsulation, } from '@angular/core';
import { Subject } from 'rxjs';
import { filter, startWith, take } from 'rxjs/operators';
import { NovoAccordion } from './accordion';
import { novoExpansionAnimations } from './expansion-animations';
import { NovoExpansionPanelContent } from './expansion-panel-content';
import * as i0 from "@angular/core";
import * as i1 from "./accordion";
import * as i2 from "@angular/cdk/collections";
import * as i3 from "@angular/cdk/portal";
function NovoExpansionPanel_ng_template_5_Template(rf, ctx) { }
var _c0 = [[["novo-expansion-panel-header"]], "*", [["novo-action-row"]]];
var _c1 = ["novo-expansion-panel-header", "*", "novo-action-row"];
/** Counter for generating unique element ids. */
var uniqueId = 0;
/**
 * `<novo-expansion-panel>`
 *
 * This component can be used as a single element to show expandable content, or as one of
 * multiple children of an element with the NovoAccordion directive attached.
 */
var NovoExpansionPanel = /** @class */ (function (_super) {
    __extends(NovoExpansionPanel, _super);
    function NovoExpansionPanel(accordion, _changeDetectorRef, _uniqueSelectionDispatcher, _viewContainerRef) {
        var _this = _super.call(this, accordion, _changeDetectorRef, _uniqueSelectionDispatcher) || this;
        _this._viewContainerRef = _viewContainerRef;
        _this._hideToggle = false;
        _this._padding = true;
        _this.opened = new EventEmitter();
        _this.closed = new EventEmitter();
        _this.expandedChange = new EventEmitter();
        /** Stream that emits for changes in `@Input` properties. */
        _this._inputChanges = new Subject();
        /** ID for the associated header element. Used for a11y labelling. */
        _this._headerId = "novo-expansion-panel-header-" + uniqueId++;
        _this.accordion = accordion;
        return _this;
    }
    Object.defineProperty(NovoExpansionPanel.prototype, "hideToggle", {
        /** Whether the toggle indicator should be hidden. */
        get: function () {
            return this._hideToggle;
        },
        set: function (value) {
            this._hideToggle = coerceBooleanProperty(value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NovoExpansionPanel.prototype, "padding", {
        get: function () {
            return this._padding;
        },
        set: function (value) {
            this._padding = coerceBooleanProperty(value);
        },
        enumerable: true,
        configurable: true
    });
    /** Whether the expansion indicator should be hidden. */
    NovoExpansionPanel.prototype._getHideToggle = function () {
        if (this.accordion) {
            return this.accordion.hideToggle;
        }
        return this.hideToggle;
    };
    /** Determines whether the expansion panel should have spacing between it and its siblings. */
    NovoExpansionPanel.prototype._hasSpacing = function () {
        if (this.accordion) {
            return (this.expanded ? this.accordion.displayMode : this._getExpandedState()) === 'default';
        }
        return false;
    };
    /** Gets the expanded state string. */
    NovoExpansionPanel.prototype._getExpandedState = function () {
        return this.expanded ? 'expanded' : 'collapsed';
    };
    NovoExpansionPanel.prototype.ngAfterContentInit = function () {
        var _this = this;
        if (this._lazyContent) {
            // Render the content as soon as the panel becomes open.
            this.opened
                .pipe(startWith(null), filter(function () { return _this.expanded && !_this._portal; }), take(1))
                .subscribe(function () {
                _this._portal = new TemplatePortal(_this._lazyContent._template, _this._viewContainerRef);
            });
        }
    };
    NovoExpansionPanel.prototype.ngOnChanges = function (changes) {
        this._inputChanges.next(changes);
    };
    NovoExpansionPanel.prototype.ngOnDestroy = function () {
        _super.prototype.ngOnDestroy.call(this);
        this._inputChanges.complete();
    };
    NovoExpansionPanel.prototype._bodyAnimation = function (event) {
        var classList = event.element.classList;
        var cssClass = 'novo-expanded';
        var phaseName = event.phaseName, toState = event.toState;
        // Toggle the body's `overflow: hidden` class when closing starts or when expansion ends in
        // order to prevent the cases where switching too early would cause the animation to jump.
        // Note that we do it directly on the DOM element to avoid the slight delay that comes
        // with doing it via change detection.
        if (phaseName === 'done' && toState === 'expanded') {
            classList.add(cssClass);
        }
        else if (phaseName === 'start' && toState === 'collapsed') {
            classList.remove(cssClass);
        }
    };
    NovoExpansionPanel.ɵfac = function NovoExpansionPanel_Factory(t) { return new (t || NovoExpansionPanel)(i0.ɵɵdirectiveInject(i1.NovoAccordion, 9), i0.ɵɵdirectiveInject(i0.ChangeDetectorRef), i0.ɵɵdirectiveInject(i2.UniqueSelectionDispatcher), i0.ɵɵdirectiveInject(i0.ViewContainerRef)); };
    NovoExpansionPanel.ɵcmp = i0.ɵɵdefineComponent({ type: NovoExpansionPanel, selectors: [["novo-expansion-panel"]], contentQueries: function NovoExpansionPanel_ContentQueries(rf, ctx, dirIndex) { if (rf & 1) {
            i0.ɵɵcontentQuery(dirIndex, NovoExpansionPanelContent, true);
        } if (rf & 2) {
            var _t;
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx._lazyContent = _t.first);
        } }, hostAttrs: [1, "novo-expansion-panel"], hostVars: 6, hostBindings: function NovoExpansionPanel_HostBindings(rf, ctx) { if (rf & 2) {
            i0.ɵɵclassProp("novo-expanded", ctx.expanded)("novo-expansion-panel-spacing", ctx._hasSpacing())("novo-expansion-panel-padding", ctx.padding);
        } }, inputs: { disabled: "disabled", expanded: "expanded", hideToggle: "hideToggle", padding: "padding" }, outputs: { opened: "opened", closed: "closed", expandedChange: "expandedChange" }, exportAs: ["novoExpansionPanel"], features: [i0.ɵɵInheritDefinitionFeature, i0.ɵɵNgOnChangesFeature], ngContentSelectors: _c1, decls: 7, vars: 4, consts: [["role", "region", 1, "novo-expansion-panel-content", 3, "id"], ["body", ""], [1, "novo-expansion-panel-body"], [3, "cdkPortalOutlet"]], template: function NovoExpansionPanel_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵprojectionDef(_c0);
            i0.ɵɵprojection(0);
            i0.ɵɵelementStart(1, "div", 0, 1);
            i0.ɵɵlistener("@bodyExpansion.done", function NovoExpansionPanel_Template_div_animation_bodyExpansion_done_1_listener($event) { return ctx._bodyAnimation($event); })("@bodyExpansion.start", function NovoExpansionPanel_Template_div_animation_bodyExpansion_start_1_listener($event) { return ctx._bodyAnimation($event); });
            i0.ɵɵelementStart(3, "div", 2);
            i0.ɵɵprojection(4, 1);
            i0.ɵɵtemplate(5, NovoExpansionPanel_ng_template_5_Template, 0, 0, "ng-template", 3);
            i0.ɵɵelementEnd();
            i0.ɵɵprojection(6, 2);
            i0.ɵɵelementEnd();
        } if (rf & 2) {
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("@bodyExpansion", ctx._getExpandedState())("id", ctx.id);
            i0.ɵɵattribute("aria-labelledby", ctx._headerId);
            i0.ɵɵadvance(4);
            i0.ɵɵproperty("cdkPortalOutlet", ctx._portal);
        } }, directives: [i3.CdkPortalOutlet], styles: ["@-webkit-keyframes rotate{0%{transform:rotateZ(0)}75%{transform:rotateZ(200deg)}100%{transform:rotateZ(180deg)}}@-webkit-keyframes half-rotate{0%{transform:rotateZ(45deg)}75%{transform:rotateZ(100deg)}100%{transform:rotateZ(90deg)}}@-webkit-keyframes rotateBack{0%{transform:rotateZ(90deg)}100%{transform:rotateZ(0)}}@-webkit-keyframes show{0%{opacity:0;transform:translateX(-100%)}75%{transform:translateX(0)}100%{opacity:1;transform:translateX(0)}}@keyframes rotate{0%{transform:rotateZ(0)}75%{transform:rotateZ(200deg)}100%{transform:rotateZ(180deg)}}@keyframes half-rotate{0%{transform:rotateZ(45deg)}75%{transform:rotateZ(100deg)}100%{transform:rotateZ(90deg)}}@keyframes rotateBack{0%{transform:rotateZ(90deg)}100%{transform:rotateZ(0)}}@keyframes show{0%{opacity:0;transform:translateX(-100%)}75%{transform:translateX(0)}100%{opacity:1;transform:translateX(0)}}.novo-expansion-panel{background:#fff;color:#3d464d;box-shadow:0 3px 1px -2px rgba(0,0,0,.2),0 2px 2px 0 rgba(0,0,0,.14),0 1px 5px 0 rgba(0,0,0,.12);box-sizing:content-box;display:block;margin:0 16px;transition:margin 225ms ease-in-out}.novo-action-row{border-top-color:#3d464d}.novo-expansion-panel:not(.novo-expanded) .novo-expansion-panel-header:not([aria-disabled=true]).cdk-keyboard-focused,.novo-expansion-panel:not(.novo-expanded) .novo-expansion-panel-header:not([aria-disabled=true]).cdk-program-focused,.novo-expansion-panel:not(.novo-expanded) .novo-expansion-panel-header:not([aria-disabled=true]):hover{background:rgba(0,0,0,.04)}.novo-expansion-panel-header-title{color:#3d464d}.novo-expansion-indicator::after,.novo-expansion-panel-header-description{color:#999}.novo-expansion-panel-header[aria-disabled=true]{color:#999;pointer-events:none}.novo-expansion-panel-header[aria-disabled=true] .novo-expansion-panel-header-description,.novo-expansion-panel-header[aria-disabled=true] .novo-expansion-panel-header-title{color:inherit}.novo-expansion-panel.novo-expanded[theme=company]{border-top:3px solid #39d}.novo-expansion-panel.novo-expanded[theme=candidate]{border-top:3px solid #4b7}.novo-expansion-panel.novo-expanded[theme=navigation]{border-top:3px solid #2f384f}.novo-expansion-panel.novo-expanded[theme=lead]{border-top:3px solid #a69}.novo-expansion-panel.novo-expanded[theme=contact]{border-top:3px solid #fa4}.novo-expansion-panel.novo-expanded[theme=opportunity]{border-top:3px solid #625}.novo-expansion-panel.novo-expanded[theme=job]{border-top:3px solid #b56}.novo-expansion-panel.novo-expanded[theme=earnCode],.novo-expansion-panel.novo-expanded[theme=jobCode]{border-top:3px solid #696d79}.novo-expansion-panel.novo-expanded[theme=sendout]{border-top:3px solid #747884}.novo-expansion-panel.novo-expanded[theme=placement]{border-top:3px solid #0b344f}.novo-expansion-panel.novo-expanded[theme=corporateuser],.novo-expansion-panel.novo-expanded[theme=credential],.novo-expansion-panel.novo-expanded[theme=distributionList],.novo-expansion-panel.novo-expanded[theme=task],.novo-expansion-panel.novo-expanded[theme=user]{border-top:3px solid #4f5361}.novo-expansion-panel.novo-expanded[theme=aqua]{border-top:3px solid #3bafda}.novo-expansion-panel.novo-expanded[theme=ocean]{border-top:3px solid #4a89dc}.novo-expansion-panel.novo-expanded[theme=mint]{border-top:3px solid #37bc9b}.novo-expansion-panel.novo-expanded[theme=grass]{border-top:3px solid #8cc152}.novo-expansion-panel.novo-expanded[theme=sunflower]{border-top:3px solid #f6b042}.novo-expansion-panel.novo-expanded[theme=bittersweet]{border-top:3px solid #eb6845}.novo-expansion-panel.novo-expanded[theme=grapefruit]{border-top:3px solid #da4453}.novo-expansion-panel.novo-expanded[theme=carnation]{border-top:3px solid #d770ad}.novo-expansion-panel.novo-expanded[theme=lavender]{border-top:3px solid #967adc}.novo-expansion-panel.novo-expanded[theme=positive]{border-top:3px solid #4a89dc}.novo-expansion-panel.novo-expanded[theme=success]{border-top:3px solid #8cc152}.novo-expansion-panel.novo-expanded[theme=negative]{border-top:3px solid #da4453}.novo-expansion-panel.novo-expanded[theme=warning]{border-top:3px solid #f6b042}.novo-expansion-panel.novo-expanded[theme=black]{border-top:3px solid #000}.novo-expansion-panel.novo-expanded[theme=dark]{border-top:3px solid #3d464d}.novo-expansion-panel.novo-expanded[theme=pulse]{border-top:3px solid #3bafda}.novo-expansion-panel.novo-expanded[theme=neutral]{border-top:3px solid #4f5361}.novo-expansion-panel.novo-expanded[theme=navy]{border-top:3px solid #0d2d42}.novo-expansion-panel.novo-expanded[theme=contract]{border-top:3px solid #454ea0}.novo-expansion-panel.novo-expanded[theme=mountain]{border-top:3px solid #9678b6}.novo-expansion-panel.novo-expanded[theme=billableCharge],.novo-expansion-panel.novo-expanded[theme=invoiceStatement],.novo-expansion-panel.novo-expanded[theme=payableCharge]{border-top:3px solid #696d79}.novo-expansion-panel.novo-expanded[theme=submission]{border-top:3px solid #a9adbb}.novo-expansion-panel.novo-expanded[theme=note]{border-top:3px solid #747884}.novo-expansion-panel.novo-expanded[theme=ash]{border-top:3px solid #a0a0a0}.novo-expansion-panel.novo-expanded[theme=slate]{border-top:3px solid #707070}.novo-expansion-panel.novo-expanded[theme=charcoal]{border-top:3px solid #282828}.novo-expansion-panel.novo-expanded[theme=background]{border-top:3px solid #f4f4f4}.novo-expansion-panel.novo-expanded[theme=background-dark]{border-top:3px solid #e2e2e2}.novo-expansion-panel.novo-expanded[theme=white]{border-top:3px solid #fff}.novo-expansion-panel.novo-expanded[theme=grey]{border-top:3px solid #999}.novo-expansion-panel.novo-expanded[theme=off-white]{border-top:3px solid #f4f4f4}.novo-expansion-panel.novo-expanded[theme=light]{border-top:3px solid #d9dadc}.novo-expansion-panel.novo-expanded[theme=empty]{border-top:3px solid #cccdcc}.novo-expansion-panel.novo-expanded[theme=sand]{border-top:3px solid #f4f4f4}.novo-expansion-panel.novo-expanded[theme=silver]{border-top:3px solid #e2e2e2}.novo-expansion-panel.novo-expanded[theme=stone]{border-top:3px solid #bebebe}.novo-expansion-panel.novo-expanded{margin:16px 4px}.novo-expansion-panel.novo-expanded:first-child{margin-top:0}.novo-expansion-panel.novo-expanded:last-child{margin-bottom:0}.novo-expansion-panel-content{overflow:hidden}.novo-expansion-panel-content.novo-expanded{overflow:visible}.novo-expansion-panel-padding .novo-expansion-panel-body{padding:0 24px 16px}.novo-accordion .novo-expansion-panel-spacing:first-child{margin-top:0}.novo-accordion .novo-expansion-panel-spacing:last-child{margin-bottom:0}.novo-action-row{border-top-style:solid;border-top-width:1px;display:flex;flex-direction:row;justify-content:flex-end;padding:16px 8px 16px 24px}.novo-action-row button.novo-button{margin-left:8px}[dir=rtl] .novo-action-row button.novo-button{margin-left:0;margin-right:8px}"], encapsulation: 2, data: { animation: [novoExpansionAnimations.bodyExpansion] }, changeDetection: 0 });
    return NovoExpansionPanel;
}(CdkAccordionItem));
export { NovoExpansionPanel };
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(NovoExpansionPanel, [{
        type: Component,
        args: [{
                styleUrls: ['./expansion-panel.scss'],
                selector: 'novo-expansion-panel',
                exportAs: 'novoExpansionPanel',
                templateUrl: './expansion-panel.html',
                encapsulation: ViewEncapsulation.None,
                changeDetection: ChangeDetectionStrategy.OnPush,
                animations: [novoExpansionAnimations.bodyExpansion],
                host: {
                    class: 'novo-expansion-panel',
                    '[class.novo-expanded]': 'expanded',
                    '[class.novo-expansion-panel-spacing]': '_hasSpacing()',
                    '[class.novo-expansion-panel-padding]': 'padding',
                },
            }]
    }], function () { return [{ type: i1.NovoAccordion, decorators: [{
                type: Optional
            }, {
                type: Host
            }] }, { type: i0.ChangeDetectorRef }, { type: i2.UniqueSelectionDispatcher }, { type: i0.ViewContainerRef }]; }, { disabled: [{
            type: Input
        }], expanded: [{
            type: Input
        }], hideToggle: [{
            type: Input
        }], padding: [{
            type: Input
        }], opened: [{
            type: Output
        }], closed: [{
            type: Output
        }], expandedChange: [{
            type: Output
        }], _lazyContent: [{
            type: ContentChild,
            args: [NovoExpansionPanelContent]
        }] }); })();
var NovoExpansionPanelActionRow = /** @class */ (function () {
    function NovoExpansionPanelActionRow() {
    }
    NovoExpansionPanelActionRow.ɵfac = function NovoExpansionPanelActionRow_Factory(t) { return new (t || NovoExpansionPanelActionRow)(); };
    NovoExpansionPanelActionRow.ɵdir = i0.ɵɵdefineDirective({ type: NovoExpansionPanelActionRow, selectors: [["novo-action-row"]], hostAttrs: [1, "novo-action-row"] });
    return NovoExpansionPanelActionRow;
}());
export { NovoExpansionPanelActionRow };
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(NovoExpansionPanelActionRow, [{
        type: Directive,
        args: [{
                selector: 'novo-action-row',
                host: {
                    class: 'novo-action-row',
                },
            }]
    }], null, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXhwYW5zaW9uLXBhbmVsLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbm92by1lbGVtZW50cy8iLCJzb3VyY2VzIjpbImVsZW1lbnRzL2V4cGFuc2lvbi9leHBhbnNpb24tcGFuZWwudHMiLCJlbGVtZW50cy9leHBhbnNpb24vZXhwYW5zaW9uLXBhbmVsLmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBQzFELE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBQzlELE9BQU8sRUFBRSx5QkFBeUIsRUFBRSxNQUFNLDBCQUEwQixDQUFDO0FBQ3JFLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUNyRCxPQUFPLEVBRUwsdUJBQXVCLEVBQ3ZCLGlCQUFpQixFQUNqQixTQUFTLEVBQ1QsWUFBWSxFQUNaLFNBQVMsRUFDVCxZQUFZLEVBQ1osSUFBSSxFQUNKLEtBQUssRUFDTCxNQUFNLEVBR04sUUFBUSxFQUVSLGdCQUFnQixFQUNoQixpQkFBaUIsR0FDbEIsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUMvQixPQUFPLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxJQUFJLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUN6RCxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sYUFBYSxDQUFDO0FBQzVDLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBQ2pFLE9BQU8sRUFBRSx5QkFBeUIsRUFBRSxNQUFNLDJCQUEyQixDQUFDOzs7Ozs7OztBQUt0RSxpREFBaUQ7QUFDakQsSUFBSSxRQUFRLEdBQUcsQ0FBQyxDQUFDO0FBRWpCOzs7OztHQUtHO0FBQ0g7SUFld0Msc0NBQWdCO0lBK0N0RCw0QkFHRSxTQUF3QixFQUN4QixrQkFBcUMsRUFDckMsMEJBQXFELEVBQzdDLGlCQUFtQztRQU43QyxZQVFFLGtCQUFNLFNBQVMsRUFBRSxrQkFBa0IsRUFBRSwwQkFBMEIsQ0FBQyxTQUVqRTtRQUpTLHVCQUFpQixHQUFqQixpQkFBaUIsQ0FBa0I7UUF4Q3JDLGlCQUFXLEdBQUcsS0FBSyxDQUFDO1FBU3BCLGNBQVEsR0FBRyxJQUFJLENBQUM7UUFHeEIsWUFBTSxHQUF1QixJQUFJLFlBQVksRUFBRSxDQUFDO1FBRWhELFlBQU0sR0FBdUIsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUVoRCxvQkFBYyxHQUEwQixJQUFJLFlBQVksRUFBRSxDQUFDO1FBRTNELDREQUE0RDtRQUNuRCxtQkFBYSxHQUFHLElBQUksT0FBTyxFQUFpQixDQUFDO1FBWXRELHFFQUFxRTtRQUNyRSxlQUFTLEdBQUcsaUNBQStCLFFBQVEsRUFBSSxDQUFDO1FBV3RELEtBQUksQ0FBQyxTQUFTLEdBQUcsU0FBUyxDQUFDOztJQUM3QixDQUFDO0lBbkRELHNCQUNJLDBDQUFVO1FBRmQscURBQXFEO2FBQ3JEO1lBRUUsT0FBTyxJQUFJLENBQUMsV0FBVyxDQUFDO1FBQzFCLENBQUM7YUFDRCxVQUFlLEtBQWM7WUFDM0IsSUFBSSxDQUFDLFdBQVcsR0FBRyxxQkFBcUIsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUNsRCxDQUFDOzs7T0FIQTtJQU1ELHNCQUNJLHVDQUFPO2FBRFg7WUFFRSxPQUFPLElBQUksQ0FBQyxRQUFRLENBQUM7UUFDdkIsQ0FBQzthQUNELFVBQVksS0FBYztZQUN4QixJQUFJLENBQUMsUUFBUSxHQUFHLHFCQUFxQixDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQy9DLENBQUM7OztPQUhBO0lBeUNELHdEQUF3RDtJQUN4RCwyQ0FBYyxHQUFkO1FBQ0UsSUFBSSxJQUFJLENBQUMsU0FBUyxFQUFFO1lBQ2xCLE9BQU8sSUFBSSxDQUFDLFNBQVMsQ0FBQyxVQUFVLENBQUM7U0FDbEM7UUFDRCxPQUFPLElBQUksQ0FBQyxVQUFVLENBQUM7SUFDekIsQ0FBQztJQUVELDhGQUE4RjtJQUM5Rix3Q0FBVyxHQUFYO1FBQ0UsSUFBSSxJQUFJLENBQUMsU0FBUyxFQUFFO1lBQ2xCLE9BQU8sQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLGlCQUFpQixFQUFFLENBQUMsS0FBSyxTQUFTLENBQUM7U0FDOUY7UUFDRCxPQUFPLEtBQUssQ0FBQztJQUNmLENBQUM7SUFFRCxzQ0FBc0M7SUFDdEMsOENBQWlCLEdBQWpCO1FBQ0UsT0FBTyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLFdBQVcsQ0FBQztJQUNsRCxDQUFDO0lBRUQsK0NBQWtCLEdBQWxCO1FBQUEsaUJBYUM7UUFaQyxJQUFJLElBQUksQ0FBQyxZQUFZLEVBQUU7WUFDckIsd0RBQXdEO1lBQ3hELElBQUksQ0FBQyxNQUFNO2lCQUNSLElBQUksQ0FDSCxTQUFTLENBQUMsSUFBSSxDQUFDLEVBQ2YsTUFBTSxDQUFDLGNBQU0sT0FBQSxLQUFJLENBQUMsUUFBUSxJQUFJLENBQUMsS0FBSSxDQUFDLE9BQU8sRUFBOUIsQ0FBOEIsQ0FBQyxFQUM1QyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQ1I7aUJBQ0EsU0FBUyxDQUFDO2dCQUNULEtBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxjQUFjLENBQUMsS0FBSSxDQUFDLFlBQVksQ0FBQyxTQUFTLEVBQUUsS0FBSSxDQUFDLGlCQUFpQixDQUFDLENBQUM7WUFDekYsQ0FBQyxDQUFDLENBQUM7U0FDTjtJQUNILENBQUM7SUFFRCx3Q0FBVyxHQUFYLFVBQVksT0FBc0I7UUFDaEMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7SUFDbkMsQ0FBQztJQUVELHdDQUFXLEdBQVg7UUFDRSxpQkFBTSxXQUFXLFdBQUUsQ0FBQztRQUNwQixJQUFJLENBQUMsYUFBYSxDQUFDLFFBQVEsRUFBRSxDQUFDO0lBQ2hDLENBQUM7SUFFRCwyQ0FBYyxHQUFkLFVBQWUsS0FBcUI7UUFDbEMsSUFBTSxTQUFTLEdBQUcsS0FBSyxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUM7UUFDMUMsSUFBTSxRQUFRLEdBQUcsZUFBZSxDQUFDO1FBQ3pCLElBQUEsMkJBQVMsRUFBRSx1QkFBTyxDQUFXO1FBRXJDLDJGQUEyRjtRQUMzRiwwRkFBMEY7UUFDMUYsc0ZBQXNGO1FBQ3RGLHNDQUFzQztRQUN0QyxJQUFJLFNBQVMsS0FBSyxNQUFNLElBQUksT0FBTyxLQUFLLFVBQVUsRUFBRTtZQUNsRCxTQUFTLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxDQUFDO1NBQ3pCO2FBQU0sSUFBSSxTQUFTLEtBQUssT0FBTyxJQUFJLE9BQU8sS0FBSyxXQUFXLEVBQUU7WUFDM0QsU0FBUyxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQztTQUM1QjtJQUNILENBQUM7d0ZBdEhVLGtCQUFrQjsyREFBbEIsa0JBQWtCO3dDQXNDZix5QkFBeUI7Ozs7Ozs7O1lDOUZ6QyxrQkFBaUQ7WUFDakQsaUNBUUU7WUFMRyx1SUFBdUIsMEJBQXNCLElBQUMsNEhBQ3RCLDBCQUFzQixJQURBO1lBS2pELDhCQUNFO1lBQUEscUJBQVk7WUFDWixtRkFBeUM7WUFDM0MsaUJBQU07WUFDTixxQkFBcUM7WUFDdkMsaUJBQU07O1lBWEQsZUFBc0M7WUFBdEMsd0RBQXNDLGNBQUE7WUFHdEMsZ0RBQWtDO1lBS3RCLGVBQTJCO1lBQTNCLDZDQUEyQjsydk5EcUM5QixDQUFDLHVCQUF1QixDQUFDLGFBQWEsQ0FBQzs2QkFoRHJEO0NBK0tDLEFBdElELENBZXdDLGdCQUFnQixHQXVIdkQ7U0F2SFksa0JBQWtCO2tEQUFsQixrQkFBa0I7Y0FmOUIsU0FBUztlQUFDO2dCQUNULFNBQVMsRUFBRSxDQUFDLHdCQUF3QixDQUFDO2dCQUNyQyxRQUFRLEVBQUUsc0JBQXNCO2dCQUNoQyxRQUFRLEVBQUUsb0JBQW9CO2dCQUM5QixXQUFXLEVBQUUsd0JBQXdCO2dCQUNyQyxhQUFhLEVBQUUsaUJBQWlCLENBQUMsSUFBSTtnQkFDckMsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07Z0JBQy9DLFVBQVUsRUFBRSxDQUFDLHVCQUF1QixDQUFDLGFBQWEsQ0FBQztnQkFDbkQsSUFBSSxFQUFFO29CQUNKLEtBQUssRUFBRSxzQkFBc0I7b0JBQzdCLHVCQUF1QixFQUFFLFVBQVU7b0JBQ25DLHNDQUFzQyxFQUFFLGVBQWU7b0JBQ3ZELHNDQUFzQyxFQUFFLFNBQVM7aUJBQ2xEO2FBQ0Y7O3NCQWlESSxRQUFROztzQkFDUixJQUFJOztrQkFoRE4sS0FBSzs7a0JBRUwsS0FBSzs7a0JBR0wsS0FBSzs7a0JBU0wsS0FBSzs7a0JBU0wsTUFBTTs7a0JBRU4sTUFBTTs7a0JBRU4sTUFBTTs7a0JBVU4sWUFBWTttQkFBQyx5QkFBeUI7O0FBbUZ6QztJQUFBO0tBTTJDOzBHQUE5QiwyQkFBMkI7b0VBQTNCLDJCQUEyQjtzQ0F2THhDO0NBdUwyQyxBQU4zQyxJQU0yQztTQUE5QiwyQkFBMkI7a0RBQTNCLDJCQUEyQjtjQU52QyxTQUFTO2VBQUM7Z0JBQ1QsUUFBUSxFQUFFLGlCQUFpQjtnQkFDM0IsSUFBSSxFQUFFO29CQUNKLEtBQUssRUFBRSxpQkFBaUI7aUJBQ3pCO2FBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBbmltYXRpb25FdmVudCB9IGZyb20gJ0Bhbmd1bGFyL2FuaW1hdGlvbnMnO1xuaW1wb3J0IHsgQ2RrQWNjb3JkaW9uSXRlbSB9IGZyb20gJ0Bhbmd1bGFyL2Nkay9hY2NvcmRpb24nO1xuaW1wb3J0IHsgY29lcmNlQm9vbGVhblByb3BlcnR5IH0gZnJvbSAnQGFuZ3VsYXIvY2RrL2NvZXJjaW9uJztcbmltcG9ydCB7IFVuaXF1ZVNlbGVjdGlvbkRpc3BhdGNoZXIgfSBmcm9tICdAYW5ndWxhci9jZGsvY29sbGVjdGlvbnMnO1xuaW1wb3J0IHsgVGVtcGxhdGVQb3J0YWwgfSBmcm9tICdAYW5ndWxhci9jZGsvcG9ydGFsJztcbmltcG9ydCB7XG4gIEFmdGVyQ29udGVudEluaXQsXG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxuICBDaGFuZ2VEZXRlY3RvclJlZixcbiAgQ29tcG9uZW50LFxuICBDb250ZW50Q2hpbGQsXG4gIERpcmVjdGl2ZSxcbiAgRXZlbnRFbWl0dGVyLFxuICBIb3N0LFxuICBJbnB1dCxcbiAgT3V0cHV0LFxuICBPbkNoYW5nZXMsXG4gIE9uRGVzdHJveSxcbiAgT3B0aW9uYWwsXG4gIFNpbXBsZUNoYW5nZXMsXG4gIFZpZXdDb250YWluZXJSZWYsXG4gIFZpZXdFbmNhcHN1bGF0aW9uLFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFN1YmplY3QgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IGZpbHRlciwgc3RhcnRXaXRoLCB0YWtlIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHsgTm92b0FjY29yZGlvbiB9IGZyb20gJy4vYWNjb3JkaW9uJztcbmltcG9ydCB7IG5vdm9FeHBhbnNpb25BbmltYXRpb25zIH0gZnJvbSAnLi9leHBhbnNpb24tYW5pbWF0aW9ucyc7XG5pbXBvcnQgeyBOb3ZvRXhwYW5zaW9uUGFuZWxDb250ZW50IH0gZnJvbSAnLi9leHBhbnNpb24tcGFuZWwtY29udGVudCc7XG5cbi8qKiBOb3ZvRXhwYW5zaW9uUGFuZWwncyBzdGF0ZXMuICovXG5leHBvcnQgdHlwZSBOb3ZvRXhwYW5zaW9uUGFuZWxTdGF0ZSA9ICdleHBhbmRlZCcgfCAnY29sbGFwc2VkJztcblxuLyoqIENvdW50ZXIgZm9yIGdlbmVyYXRpbmcgdW5pcXVlIGVsZW1lbnQgaWRzLiAqL1xubGV0IHVuaXF1ZUlkID0gMDtcblxuLyoqXG4gKiBgPG5vdm8tZXhwYW5zaW9uLXBhbmVsPmBcbiAqXG4gKiBUaGlzIGNvbXBvbmVudCBjYW4gYmUgdXNlZCBhcyBhIHNpbmdsZSBlbGVtZW50IHRvIHNob3cgZXhwYW5kYWJsZSBjb250ZW50LCBvciBhcyBvbmUgb2ZcbiAqIG11bHRpcGxlIGNoaWxkcmVuIG9mIGFuIGVsZW1lbnQgd2l0aCB0aGUgTm92b0FjY29yZGlvbiBkaXJlY3RpdmUgYXR0YWNoZWQuXG4gKi9cbkBDb21wb25lbnQoe1xuICBzdHlsZVVybHM6IFsnLi9leHBhbnNpb24tcGFuZWwuc2NzcyddLFxuICBzZWxlY3RvcjogJ25vdm8tZXhwYW5zaW9uLXBhbmVsJyxcbiAgZXhwb3J0QXM6ICdub3ZvRXhwYW5zaW9uUGFuZWwnLFxuICB0ZW1wbGF0ZVVybDogJy4vZXhwYW5zaW9uLXBhbmVsLmh0bWwnLFxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbiAgYW5pbWF0aW9uczogW25vdm9FeHBhbnNpb25BbmltYXRpb25zLmJvZHlFeHBhbnNpb25dLFxuICBob3N0OiB7XG4gICAgY2xhc3M6ICdub3ZvLWV4cGFuc2lvbi1wYW5lbCcsXG4gICAgJ1tjbGFzcy5ub3ZvLWV4cGFuZGVkXSc6ICdleHBhbmRlZCcsXG4gICAgJ1tjbGFzcy5ub3ZvLWV4cGFuc2lvbi1wYW5lbC1zcGFjaW5nXSc6ICdfaGFzU3BhY2luZygpJyxcbiAgICAnW2NsYXNzLm5vdm8tZXhwYW5zaW9uLXBhbmVsLXBhZGRpbmddJzogJ3BhZGRpbmcnLFxuICB9LFxufSlcbmV4cG9ydCBjbGFzcyBOb3ZvRXhwYW5zaW9uUGFuZWwgZXh0ZW5kcyBDZGtBY2NvcmRpb25JdGVtIGltcGxlbWVudHMgQWZ0ZXJDb250ZW50SW5pdCwgT25DaGFuZ2VzLCBPbkRlc3Ryb3kge1xuICBASW5wdXQoKVxuICBkaXNhYmxlZDogYm9vbGVhbjtcbiAgQElucHV0KClcbiAgZXhwYW5kZWQ6IGJvb2xlYW47XG4gIC8qKiBXaGV0aGVyIHRoZSB0b2dnbGUgaW5kaWNhdG9yIHNob3VsZCBiZSBoaWRkZW4uICovXG4gIEBJbnB1dCgpXG4gIGdldCBoaWRlVG9nZ2xlKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLl9oaWRlVG9nZ2xlO1xuICB9XG4gIHNldCBoaWRlVG9nZ2xlKHZhbHVlOiBib29sZWFuKSB7XG4gICAgdGhpcy5faGlkZVRvZ2dsZSA9IGNvZXJjZUJvb2xlYW5Qcm9wZXJ0eSh2YWx1ZSk7XG4gIH1cbiAgcHJpdmF0ZSBfaGlkZVRvZ2dsZSA9IGZhbHNlO1xuXG4gIEBJbnB1dCgpXG4gIGdldCBwYWRkaW5nKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLl9wYWRkaW5nO1xuICB9XG4gIHNldCBwYWRkaW5nKHZhbHVlOiBib29sZWFuKSB7XG4gICAgdGhpcy5fcGFkZGluZyA9IGNvZXJjZUJvb2xlYW5Qcm9wZXJ0eSh2YWx1ZSk7XG4gIH1cbiAgcHJpdmF0ZSBfcGFkZGluZyA9IHRydWU7XG5cbiAgQE91dHB1dCgpXG4gIG9wZW5lZDogRXZlbnRFbWl0dGVyPHZvaWQ+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICBAT3V0cHV0KClcbiAgY2xvc2VkOiBFdmVudEVtaXR0ZXI8dm9pZD4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gIEBPdXRwdXQoKVxuICBleHBhbmRlZENoYW5nZTogRXZlbnRFbWl0dGVyPGJvb2xlYW4+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG4gIC8qKiBTdHJlYW0gdGhhdCBlbWl0cyBmb3IgY2hhbmdlcyBpbiBgQElucHV0YCBwcm9wZXJ0aWVzLiAqL1xuICByZWFkb25seSBfaW5wdXRDaGFuZ2VzID0gbmV3IFN1YmplY3Q8U2ltcGxlQ2hhbmdlcz4oKTtcblxuICAvKiogT3B0aW9uYWxseSBkZWZpbmVkIGFjY29yZGlvbiB0aGUgZXhwYW5zaW9uIHBhbmVsIGJlbG9uZ3MgdG8uICovXG4gIGFjY29yZGlvbjogTm92b0FjY29yZGlvbjtcblxuICAvKiogQ29udGVudCB0aGF0IHdpbGwgYmUgcmVuZGVyZWQgbGF6aWx5LiAqL1xuICBAQ29udGVudENoaWxkKE5vdm9FeHBhbnNpb25QYW5lbENvbnRlbnQpXG4gIF9sYXp5Q29udGVudDogTm92b0V4cGFuc2lvblBhbmVsQ29udGVudDtcblxuICAvKiogUG9ydGFsIGhvbGRpbmcgdGhlIHVzZXIncyBjb250ZW50LiAqL1xuICBfcG9ydGFsOiBUZW1wbGF0ZVBvcnRhbDtcblxuICAvKiogSUQgZm9yIHRoZSBhc3NvY2lhdGVkIGhlYWRlciBlbGVtZW50LiBVc2VkIGZvciBhMTF5IGxhYmVsbGluZy4gKi9cbiAgX2hlYWRlcklkID0gYG5vdm8tZXhwYW5zaW9uLXBhbmVsLWhlYWRlci0ke3VuaXF1ZUlkKyt9YDtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBAT3B0aW9uYWwoKVxuICAgIEBIb3N0KClcbiAgICBhY2NvcmRpb246IE5vdm9BY2NvcmRpb24sXG4gICAgX2NoYW5nZURldGVjdG9yUmVmOiBDaGFuZ2VEZXRlY3RvclJlZixcbiAgICBfdW5pcXVlU2VsZWN0aW9uRGlzcGF0Y2hlcjogVW5pcXVlU2VsZWN0aW9uRGlzcGF0Y2hlcixcbiAgICBwcml2YXRlIF92aWV3Q29udGFpbmVyUmVmOiBWaWV3Q29udGFpbmVyUmVmLFxuICApIHtcbiAgICBzdXBlcihhY2NvcmRpb24sIF9jaGFuZ2VEZXRlY3RvclJlZiwgX3VuaXF1ZVNlbGVjdGlvbkRpc3BhdGNoZXIpO1xuICAgIHRoaXMuYWNjb3JkaW9uID0gYWNjb3JkaW9uO1xuICB9XG5cbiAgLyoqIFdoZXRoZXIgdGhlIGV4cGFuc2lvbiBpbmRpY2F0b3Igc2hvdWxkIGJlIGhpZGRlbi4gKi9cbiAgX2dldEhpZGVUb2dnbGUoKTogYm9vbGVhbiB7XG4gICAgaWYgKHRoaXMuYWNjb3JkaW9uKSB7XG4gICAgICByZXR1cm4gdGhpcy5hY2NvcmRpb24uaGlkZVRvZ2dsZTtcbiAgICB9XG4gICAgcmV0dXJuIHRoaXMuaGlkZVRvZ2dsZTtcbiAgfVxuXG4gIC8qKiBEZXRlcm1pbmVzIHdoZXRoZXIgdGhlIGV4cGFuc2lvbiBwYW5lbCBzaG91bGQgaGF2ZSBzcGFjaW5nIGJldHdlZW4gaXQgYW5kIGl0cyBzaWJsaW5ncy4gKi9cbiAgX2hhc1NwYWNpbmcoKTogYm9vbGVhbiB7XG4gICAgaWYgKHRoaXMuYWNjb3JkaW9uKSB7XG4gICAgICByZXR1cm4gKHRoaXMuZXhwYW5kZWQgPyB0aGlzLmFjY29yZGlvbi5kaXNwbGF5TW9kZSA6IHRoaXMuX2dldEV4cGFuZGVkU3RhdGUoKSkgPT09ICdkZWZhdWx0JztcbiAgICB9XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgLyoqIEdldHMgdGhlIGV4cGFuZGVkIHN0YXRlIHN0cmluZy4gKi9cbiAgX2dldEV4cGFuZGVkU3RhdGUoKTogTm92b0V4cGFuc2lvblBhbmVsU3RhdGUge1xuICAgIHJldHVybiB0aGlzLmV4cGFuZGVkID8gJ2V4cGFuZGVkJyA6ICdjb2xsYXBzZWQnO1xuICB9XG5cbiAgbmdBZnRlckNvbnRlbnRJbml0KCkge1xuICAgIGlmICh0aGlzLl9sYXp5Q29udGVudCkge1xuICAgICAgLy8gUmVuZGVyIHRoZSBjb250ZW50IGFzIHNvb24gYXMgdGhlIHBhbmVsIGJlY29tZXMgb3Blbi5cbiAgICAgIHRoaXMub3BlbmVkXG4gICAgICAgIC5waXBlKFxuICAgICAgICAgIHN0YXJ0V2l0aChudWxsKSxcbiAgICAgICAgICBmaWx0ZXIoKCkgPT4gdGhpcy5leHBhbmRlZCAmJiAhdGhpcy5fcG9ydGFsKSxcbiAgICAgICAgICB0YWtlKDEpLFxuICAgICAgICApXG4gICAgICAgIC5zdWJzY3JpYmUoKCkgPT4ge1xuICAgICAgICAgIHRoaXMuX3BvcnRhbCA9IG5ldyBUZW1wbGF0ZVBvcnRhbCh0aGlzLl9sYXp5Q29udGVudC5fdGVtcGxhdGUsIHRoaXMuX3ZpZXdDb250YWluZXJSZWYpO1xuICAgICAgICB9KTtcbiAgICB9XG4gIH1cblxuICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKSB7XG4gICAgdGhpcy5faW5wdXRDaGFuZ2VzLm5leHQoY2hhbmdlcyk7XG4gIH1cblxuICBuZ09uRGVzdHJveSgpIHtcbiAgICBzdXBlci5uZ09uRGVzdHJveSgpO1xuICAgIHRoaXMuX2lucHV0Q2hhbmdlcy5jb21wbGV0ZSgpO1xuICB9XG5cbiAgX2JvZHlBbmltYXRpb24oZXZlbnQ6IEFuaW1hdGlvbkV2ZW50KSB7XG4gICAgY29uc3QgY2xhc3NMaXN0ID0gZXZlbnQuZWxlbWVudC5jbGFzc0xpc3Q7XG4gICAgY29uc3QgY3NzQ2xhc3MgPSAnbm92by1leHBhbmRlZCc7XG4gICAgY29uc3QgeyBwaGFzZU5hbWUsIHRvU3RhdGUgfSA9IGV2ZW50O1xuXG4gICAgLy8gVG9nZ2xlIHRoZSBib2R5J3MgYG92ZXJmbG93OiBoaWRkZW5gIGNsYXNzIHdoZW4gY2xvc2luZyBzdGFydHMgb3Igd2hlbiBleHBhbnNpb24gZW5kcyBpblxuICAgIC8vIG9yZGVyIHRvIHByZXZlbnQgdGhlIGNhc2VzIHdoZXJlIHN3aXRjaGluZyB0b28gZWFybHkgd291bGQgY2F1c2UgdGhlIGFuaW1hdGlvbiB0byBqdW1wLlxuICAgIC8vIE5vdGUgdGhhdCB3ZSBkbyBpdCBkaXJlY3RseSBvbiB0aGUgRE9NIGVsZW1lbnQgdG8gYXZvaWQgdGhlIHNsaWdodCBkZWxheSB0aGF0IGNvbWVzXG4gICAgLy8gd2l0aCBkb2luZyBpdCB2aWEgY2hhbmdlIGRldGVjdGlvbi5cbiAgICBpZiAocGhhc2VOYW1lID09PSAnZG9uZScgJiYgdG9TdGF0ZSA9PT0gJ2V4cGFuZGVkJykge1xuICAgICAgY2xhc3NMaXN0LmFkZChjc3NDbGFzcyk7XG4gICAgfSBlbHNlIGlmIChwaGFzZU5hbWUgPT09ICdzdGFydCcgJiYgdG9TdGF0ZSA9PT0gJ2NvbGxhcHNlZCcpIHtcbiAgICAgIGNsYXNzTGlzdC5yZW1vdmUoY3NzQ2xhc3MpO1xuICAgIH1cbiAgfVxufVxuXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICdub3ZvLWFjdGlvbi1yb3cnLFxuICBob3N0OiB7XG4gICAgY2xhc3M6ICdub3ZvLWFjdGlvbi1yb3cnLFxuICB9LFxufSlcbmV4cG9ydCBjbGFzcyBOb3ZvRXhwYW5zaW9uUGFuZWxBY3Rpb25Sb3cge31cbiIsIjxuZy1jb250ZW50IHNlbGVjdD1cIm5vdm8tZXhwYW5zaW9uLXBhbmVsLWhlYWRlclwiPjwvbmctY29udGVudD5cbjxkaXYgY2xhc3M9XCJub3ZvLWV4cGFuc2lvbi1wYW5lbC1jb250ZW50XCJcbiAgICAgcm9sZT1cInJlZ2lvblwiXG4gICAgIFtAYm9keUV4cGFuc2lvbl09XCJfZ2V0RXhwYW5kZWRTdGF0ZSgpXCJcbiAgICAgKEBib2R5RXhwYW5zaW9uLmRvbmUpPVwiX2JvZHlBbmltYXRpb24oJGV2ZW50KVwiXG4gICAgIChAYm9keUV4cGFuc2lvbi5zdGFydCk9XCJfYm9keUFuaW1hdGlvbigkZXZlbnQpXCJcbiAgICAgW2F0dHIuYXJpYS1sYWJlbGxlZGJ5XT1cIl9oZWFkZXJJZFwiXG4gICAgIFtpZF09XCJpZFwiXG4gICAgICNib2R5PlxuICA8ZGl2IGNsYXNzPVwibm92by1leHBhbnNpb24tcGFuZWwtYm9keVwiPlxuICAgIDxuZy1jb250ZW50PjwvbmctY29udGVudD5cbiAgICA8bmctdGVtcGxhdGUgW2Nka1BvcnRhbE91dGxldF09XCJfcG9ydGFsXCI+PC9uZy10ZW1wbGF0ZT5cbiAgPC9kaXY+XG4gIDxuZy1jb250ZW50IHNlbGVjdD1cIm5vdm8tYWN0aW9uLXJvd1wiPjwvbmctY29udGVudD5cbjwvZGl2PlxuIl19