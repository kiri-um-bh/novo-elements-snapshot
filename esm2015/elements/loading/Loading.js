// NG2
import { coerceBooleanProperty } from '@angular/cdk/coercion';
import { Component, ContentChildren, Directive, HostBinding, Input, QueryList, TemplateRef, ViewContainerRef, } from '@angular/core';
import * as i0 from "@angular/core";
export class NovoLoadingElement {
    constructor() {
        this._small = false;
        this._large = false;
    }
    get small() {
        return this._small;
    }
    set small(value) {
        this._small = coerceBooleanProperty(value);
    }
    get large() {
        return this._large;
    }
}
NovoLoadingElement.ɵfac = function NovoLoadingElement_Factory(t) { return new (t || NovoLoadingElement)(); };
NovoLoadingElement.ɵcmp = i0.ɵɵdefineComponent({ type: NovoLoadingElement, selectors: [["novo-loading"]], hostVars: 4, hostBindings: function NovoLoadingElement_HostBindings(rf, ctx) { if (rf & 2) {
        i0.ɵɵclassMap(ctx.theme || "");
        i0.ɵɵclassProp("small", ctx.small);
    } }, inputs: { theme: "theme", small: "small" }, decls: 5, vars: 0, consts: [[1, "dot"]], template: function NovoLoadingElement_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelement(0, "span", 0);
        i0.ɵɵelement(1, "span", 0);
        i0.ɵɵelement(2, "span", 0);
        i0.ɵɵelement(3, "span", 0);
        i0.ɵɵelement(4, "span", 0);
    } }, encapsulation: 2 });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(NovoLoadingElement, [{
        type: Component,
        args: [{
                selector: 'novo-loading',
                host: {
                    '[class]': 'theme || ""',
                },
                template: `
    <span class="dot"></span>
    <span class="dot"></span>
    <span class="dot"></span>
    <span class="dot"></span>
    <span class="dot"></span>
  `,
            }]
    }], null, { theme: [{
            type: Input
        }], small: [{
            type: Input
        }, {
            type: HostBinding,
            args: ['class.small']
        }] }); })();
export class NovoSpinnerElement {
    constructor() {
        this.theme = 'multicolor';
        this._small = false;
        this._large = false;
    }
    get small() {
        return this._small;
    }
    set small(value) {
        this._small = coerceBooleanProperty(value);
    }
    get large() {
        return this._large;
    }
    set large(value) {
        this._large = coerceBooleanProperty(value);
    }
    get inverse() {
        return this._inverse;
    }
    set inverse(value) {
        this._inverse = coerceBooleanProperty(value);
    }
    get hb_class() {
        return this.inverse ? 'white' : this.theme;
    }
}
NovoSpinnerElement.ɵfac = function NovoSpinnerElement_Factory(t) { return new (t || NovoSpinnerElement)(); };
NovoSpinnerElement.ɵcmp = i0.ɵɵdefineComponent({ type: NovoSpinnerElement, selectors: [["novo-spinner"]], hostVars: 6, hostBindings: function NovoSpinnerElement_HostBindings(rf, ctx) { if (rf & 2) {
        i0.ɵɵclassMap(ctx.hb_class);
        i0.ɵɵclassProp("small", ctx.small)("large", ctx.large);
    } }, inputs: { theme: "theme", small: "small", large: "large", inverse: "inverse" }, decls: 12, vars: 0, consts: [[1, "dot1", "dot"], [1, "dot2", "dot"], [1, "dot3", "dot"], [1, "dot4", "dot"], [1, "dot5", "dot"], [1, "dot6", "dot"], [1, "dot7", "dot"], [1, "dot8", "dot"], [1, "dot9", "dot"], [1, "dot10", "dot"], [1, "dot11", "dot"], [1, "dot12", "dot"]], template: function NovoSpinnerElement_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelement(0, "div", 0);
        i0.ɵɵelement(1, "div", 1);
        i0.ɵɵelement(2, "div", 2);
        i0.ɵɵelement(3, "div", 3);
        i0.ɵɵelement(4, "div", 4);
        i0.ɵɵelement(5, "div", 5);
        i0.ɵɵelement(6, "div", 6);
        i0.ɵɵelement(7, "div", 7);
        i0.ɵɵelement(8, "div", 8);
        i0.ɵɵelement(9, "div", 9);
        i0.ɵɵelement(10, "div", 10);
        i0.ɵɵelement(11, "div", 11);
    } }, encapsulation: 2 });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(NovoSpinnerElement, [{
        type: Component,
        args: [{
                selector: 'novo-spinner',
                template: `
    <div class="dot1 dot"></div>
    <div class="dot2 dot"></div>
    <div class="dot3 dot"></div>
    <div class="dot4 dot"></div>
    <div class="dot5 dot"></div>
    <div class="dot6 dot"></div>
    <div class="dot7 dot"></div>
    <div class="dot8 dot"></div>
    <div class="dot9 dot"></div>
    <div class="dot10 dot"></div>
    <div class="dot11 dot"></div>
    <div class="dot12 dot"></div>
  `,
            }]
    }], null, { theme: [{
            type: Input
        }], small: [{
            type: Input
        }, {
            type: HostBinding,
            args: ['class.small']
        }], large: [{
            type: Input
        }, {
            type: HostBinding,
            args: ['class.large']
        }], inverse: [{
            type: Input
        }], hb_class: [{
            type: HostBinding,
            args: ['class']
        }] }); })();
export class NovoSkeletonDirective {
    constructor() {
        this.skeleton = true;
    }
}
NovoSkeletonDirective.ɵfac = function NovoSkeletonDirective_Factory(t) { return new (t || NovoSkeletonDirective)(); };
NovoSkeletonDirective.ɵdir = i0.ɵɵdefineDirective({ type: NovoSkeletonDirective, selectors: [["", "skeleton", ""]], hostVars: 2, hostBindings: function NovoSkeletonDirective_HostBindings(rf, ctx) { if (rf & 2) {
        i0.ɵɵclassProp("skeleton", ctx.skeleton);
    } } });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(NovoSkeletonDirective, [{
        type: Directive,
        args: [{
                selector: '[skeleton]',
            }]
    }], null, { skeleton: [{
            type: HostBinding,
            args: ['class.skeleton']
        }] }); })();
export class NovoLoadedDirective {
}
NovoLoadedDirective.ɵfac = function NovoLoadedDirective_Factory(t) { return new (t || NovoLoadedDirective)(); };
NovoLoadedDirective.ɵdir = i0.ɵɵdefineDirective({ type: NovoLoadedDirective, selectors: [["", "loaded", ""]] });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(NovoLoadedDirective, [{
        type: Directive,
        args: [{
                selector: '[loaded]',
            }]
    }], null, null); })();
export class NovoIsLoadingDirective {
    constructor(viewContainer) {
        this.viewContainer = viewContainer;
        this.hasView = false;
        this.skeletonViews = [];
        this.loadedViews = [];
    }
    set isLoading(condition) {
        if (!condition && !this.hasView) {
            this.destroyViews(this.loadedViews);
            this.skeletonViews = this.createViews(this.skeletonTemplates);
            this.hasView = true;
        }
        else if (condition && this.hasView) {
            this.destroyViews(this.skeletonViews);
            this.loadedViews = this.createViews(this.loadedTemplates);
            this.hasView = false;
        }
    }
    createViews(templates) {
        return templates && templates.map((v) => this.viewContainer.createEmbeddedView(v));
    }
    destroyViews(views) {
        if (views) {
            for (const view of views) {
                view.destroy();
            }
        }
    }
}
NovoIsLoadingDirective.ɵfac = function NovoIsLoadingDirective_Factory(t) { return new (t || NovoIsLoadingDirective)(i0.ɵɵdirectiveInject(i0.ViewContainerRef)); };
NovoIsLoadingDirective.ɵdir = i0.ɵɵdefineDirective({ type: NovoIsLoadingDirective, selectors: [["", "isLoading", ""]], contentQueries: function NovoIsLoadingDirective_ContentQueries(rf, ctx, dirIndex) { if (rf & 1) {
        i0.ɵɵcontentQuery(dirIndex, NovoSkeletonDirective, false, TemplateRef);
        i0.ɵɵcontentQuery(dirIndex, NovoLoadedDirective, false, TemplateRef);
    } if (rf & 2) {
        var _t;
        i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.skeletonTemplates = _t);
        i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.loadedTemplates = _t);
    } }, inputs: { isLoading: "isLoading" } });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(NovoIsLoadingDirective, [{
        type: Directive,
        args: [{
                selector: '[isLoading]',
            }]
    }], function () { return [{ type: i0.ViewContainerRef }]; }, { skeletonTemplates: [{
            type: ContentChildren,
            args: [NovoSkeletonDirective, { read: TemplateRef }]
        }], loadedTemplates: [{
            type: ContentChildren,
            args: [NovoLoadedDirective, { read: TemplateRef }]
        }], isLoading: [{
            type: Input
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTG9hZGluZy5qcyIsInNvdXJjZVJvb3QiOiIvaG9tZS90cmF2aXMvYnVpbGQvYnVsbGhvcm4vbm92by1lbGVtZW50cy9wcm9qZWN0cy9ub3ZvLWVsZW1lbnRzL3NyYy8iLCJzb3VyY2VzIjpbImVsZW1lbnRzL2xvYWRpbmcvTG9hZGluZy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxNQUFNO0FBQ04sT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFDOUQsT0FBTyxFQUNMLFNBQVMsRUFDVCxlQUFlLEVBQ2YsU0FBUyxFQUVULFdBQVcsRUFDWCxLQUFLLEVBQ0wsU0FBUyxFQUNULFdBQVcsRUFDWCxnQkFBZ0IsR0FDakIsTUFBTSxlQUFlLENBQUM7O0FBZXZCLE1BQU0sT0FBTyxrQkFBa0I7SUFiL0I7UUFnQlUsV0FBTSxHQUFZLEtBQUssQ0FBQztRQVV4QixXQUFNLEdBQVksS0FBSyxDQUFDO0tBSWpDO0lBYkMsSUFBSSxLQUFLO1FBQ1AsT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDO0lBQ3JCLENBQUM7SUFDRCxJQUVJLEtBQUssQ0FBQyxLQUFjO1FBQ3RCLElBQUksQ0FBQyxNQUFNLEdBQUcscUJBQXFCLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDN0MsQ0FBQztJQUdELElBQUksS0FBSztRQUNQLE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQztJQUNyQixDQUFDOztvRkFoQlUsa0JBQWtCO3VEQUFsQixrQkFBa0I7Ozs7UUFQM0IsMEJBQXlCO1FBQ3pCLDBCQUF5QjtRQUN6QiwwQkFBeUI7UUFDekIsMEJBQXlCO1FBQ3pCLDBCQUF5Qjs7a0RBR2hCLGtCQUFrQjtjQWI5QixTQUFTO2VBQUM7Z0JBQ1QsUUFBUSxFQUFFLGNBQWM7Z0JBQ3hCLElBQUksRUFBRTtvQkFDSixTQUFTLEVBQUUsYUFBYTtpQkFDekI7Z0JBQ0QsUUFBUSxFQUFFOzs7Ozs7R0FNVDthQUNGO2dCQUdDLEtBQUs7a0JBREosS0FBSztZQVFGLEtBQUs7a0JB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SSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUM7U0FDckI7YUFBTSxJQUFJLFNBQVMsSUFBSSxJQUFJLENBQUMsT0FBTyxFQUFFO1lBQ3BDLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDO1lBQ3RDLElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsZUFBZSxDQUFDLENBQUM7WUFDMUQsSUFBSSxDQUFDLE9BQU8sR0FBRyxLQUFLLENBQUM7U0FDdEI7SUFDSCxDQUFDO0lBQ0QsV0FBVyxDQUFDLFNBQXNDO1FBQ2hELE9BQU8sU0FBUyxJQUFJLFNBQVMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsa0JBQWtCLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUNyRixDQUFDO0lBQ0QsWUFBWSxDQUFDLEtBQTZCO1FBQ3hDLElBQUksS0FBSyxFQUFFO1lBQ1QsS0FBSyxNQUFNLElBQUksSUFBSSxLQUFLLEVBQUU7Z0JBQ3hCLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQzthQUNoQjtTQUNGO0lBQ0gsQ0FBQzs7NEZBakNVLHNCQUFzQjsyREFBdEIsc0JBQXNCO29DQUNoQixxQkFBcUIsU0FBVSxXQUFXO29DQUUxQyxtQkFBbUIsU0FBVSxXQUFXOzs7Ozs7a0RBSDlDLHNCQUFzQjtjQUhsQyxTQUFTO2VBQUM7Z0JBQ1QsUUFBUSxFQUFFLGFBQWE7YUFDeEI7bUVBR1EsaUJBQWlCO2tCQUR2QixlQUFlO21CQUFDLHFCQUFxQixFQUFFLEVBQUUsSUFBSSxFQUFFLFdBQVcsRUFBRTtZQUd0RCxlQUFlO2tCQURyQixlQUFlO21CQUFDLG1CQUFtQixFQUFFLEVBQUUsSUFBSSxFQUFFLFdBQVcsRUFBRTtZQVV2RCxTQUFTO2tCQURaLEtBQUsiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBORzJcbmltcG9ydCB7IGNvZXJjZUJvb2xlYW5Qcm9wZXJ0eSB9IGZyb20gJ0Bhbmd1bGFyL2Nkay9jb2VyY2lvbic7XG5pbXBvcnQge1xuICBDb21wb25lbnQsXG4gIENvbnRlbnRDaGlsZHJlbixcbiAgRGlyZWN0aXZlLFxuICBFbWJlZGRlZFZpZXdSZWYsXG4gIEhvc3RCaW5kaW5nLFxuICBJbnB1dCxcbiAgUXVlcnlMaXN0LFxuICBUZW1wbGF0ZVJlZixcbiAgVmlld0NvbnRhaW5lclJlZixcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ25vdm8tbG9hZGluZycsXG4gIGhvc3Q6IHtcbiAgICAnW2NsYXNzXSc6ICd0aGVtZSB8fCBcIlwiJyxcbiAgfSxcbiAgdGVtcGxhdGU6IGBcbiAgICA8c3BhbiBjbGFzcz1cImRvdFwiPjwvc3Bhbj5cbiAgICA8c3BhbiBjbGFzcz1cImRvdFwiPjwvc3Bhbj5cbiAgICA8c3BhbiBjbGFzcz1cImRvdFwiPjwvc3Bhbj5cbiAgICA8c3BhbiBjbGFzcz1cImRvdFwiPjwvc3Bhbj5cbiAgICA8c3BhbiBjbGFzcz1cImRvdFwiPjwvc3Bhbj5cbiAgYCxcbn0pXG5leHBvcnQgY2xhc3MgTm92b0xvYWRpbmdFbGVtZW50IHtcbiAgQElucHV0KClcbiAgdGhlbWU6IHN0cmluZztcbiAgcHJpdmF0ZSBfc21hbGw6IGJvb2xlYW4gPSBmYWxzZTtcbiAgZ2V0IHNtYWxsKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLl9zbWFsbDtcbiAgfVxuICBASW5wdXQoKVxuICBASG9zdEJpbmRpbmcoJ2NsYXNzLnNtYWxsJylcbiAgc2V0IHNtYWxsKHZhbHVlOiBib29sZWFuKSB7XG4gICAgdGhpcy5fc21hbGwgPSBjb2VyY2VCb29sZWFuUHJvcGVydHkodmFsdWUpO1xuICB9XG5cbiAgcHJpdmF0ZSBfbGFyZ2U6IGJvb2xlYW4gPSBmYWxzZTtcbiAgZ2V0IGxhcmdlKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLl9sYXJnZTtcbiAgfVxufVxuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdub3ZvLXNwaW5uZXInLFxuICB0ZW1wbGF0ZTogYFxuICAgIDxkaXYgY2xhc3M9XCJkb3QxIGRvdFwiPjwvZGl2PlxuICAgIDxkaXYgY2xhc3M9XCJkb3QyIGRvdFwiPjwvZGl2PlxuICAgIDxkaXYgY2xhc3M9XCJkb3QzIGRvdFwiPjwvZGl2PlxuICAgIDxkaXYgY2xhc3M9XCJkb3Q0IGRvdFwiPjwvZGl2PlxuICAgIDxkaXYgY2xhc3M9XCJkb3Q1IGRvdFwiPjwvZGl2PlxuICAgIDxkaXYgY2xhc3M9XCJkb3Q2IGRvdFwiPjwvZGl2PlxuICAgIDxkaXYgY2xhc3M9XCJkb3Q3IGRvdFwiPjwvZGl2PlxuICAgIDxkaXYgY2xhc3M9XCJkb3Q4IGRvdFwiPjwvZGl2PlxuICAgIDxkaXYgY2xhc3M9XCJkb3Q5IGRvdFwiPjwvZGl2PlxuICAgIDxkaXYgY2xhc3M9XCJkb3QxMCBkb3RcIj48L2Rpdj5cbiAgICA8ZGl2IGNsYXNzPVwiZG90MTEgZG90XCI+PC9kaXY+XG4gICAgPGRpdiBjbGFzcz1cImRvdDEyIGRvdFwiPjwvZGl2PlxuICBgLFxufSlcbmV4cG9ydCBjbGFzcyBOb3ZvU3Bpbm5lckVsZW1lbnQge1xuICBASW5wdXQoKVxuICB0aGVtZTogc3RyaW5nID0gJ211bHRpY29sb3InO1xuXG4gIHByaXZhdGUgX3NtYWxsOiBib29sZWFuID0gZmFsc2U7XG4gIGdldCBzbWFsbCgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5fc21hbGw7XG4gIH1cbiAgQElucHV0KClcbiAgQEhvc3RCaW5kaW5nKCdjbGFzcy5zbWFsbCcpXG4gIHNldCBzbWFsbCh2YWx1ZTogYm9vbGVhbikge1xuICAgIHRoaXMuX3NtYWxsID0gY29lcmNlQm9vbGVhblByb3BlcnR5KHZhbHVlKTtcbiAgfVxuXG4gIHByaXZhdGUgX2xhcmdlOiBib29sZWFuID0gZmFsc2U7XG4gIGdldCBsYXJnZSgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5fbGFyZ2U7XG4gIH1cbiAgQElucHV0KClcbiAgQEhvc3RCaW5kaW5nKCdjbGFzcy5sYXJnZScpXG4gIHNldCBsYXJnZSh2YWx1ZTogYm9vbGVhbikge1xuICAgIHRoaXMuX2xhcmdlID0gY29lcmNlQm9vbGVhblByb3BlcnR5KHZhbHVlKTtcbiAgfVxuXG4gIHByaXZhdGUgX2ludmVyc2U6IGJvb2xlYW47XG4gIGdldCBpbnZlcnNlKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLl9pbnZlcnNlO1xuICB9XG4gIEBJbnB1dCgpXG4gIHNldCBpbnZlcnNlKHZhbHVlOiBib29sZWFuKSB7XG4gICAgdGhpcy5faW52ZXJzZSA9IGNvZXJjZUJvb2xlYW5Qcm9wZXJ0eSh2YWx1ZSk7XG4gIH1cblxuICBASG9zdEJpbmRpbmcoJ2NsYXNzJylcbiAgZ2V0IGhiX2NsYXNzKCkge1xuICAgIHJldHVybiB0aGlzLmludmVyc2UgPyAnd2hpdGUnIDogdGhpcy50aGVtZTtcbiAgfVxufVxuXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICdbc2tlbGV0b25dJyxcbn0pXG5leHBvcnQgY2xhc3MgTm92b1NrZWxldG9uRGlyZWN0aXZlIHtcbiAgQEhvc3RCaW5kaW5nKCdjbGFzcy5za2VsZXRvbicpXG4gIHNrZWxldG9uOiBib29sZWFuID0gdHJ1ZTtcbn1cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogJ1tsb2FkZWRdJyxcbn0pXG5leHBvcnQgY2xhc3MgTm92b0xvYWRlZERpcmVjdGl2ZSB7fVxuXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICdbaXNMb2FkaW5nXScsXG59KVxuZXhwb3J0IGNsYXNzIE5vdm9Jc0xvYWRpbmdEaXJlY3RpdmUge1xuICBAQ29udGVudENoaWxkcmVuKE5vdm9Ta2VsZXRvbkRpcmVjdGl2ZSwgeyByZWFkOiBUZW1wbGF0ZVJlZiB9KVxuICBwdWJsaWMgc2tlbGV0b25UZW1wbGF0ZXM6IFF1ZXJ5TGlzdDxUZW1wbGF0ZVJlZjxhbnk+PjtcbiAgQENvbnRlbnRDaGlsZHJlbihOb3ZvTG9hZGVkRGlyZWN0aXZlLCB7IHJlYWQ6IFRlbXBsYXRlUmVmIH0pXG4gIHB1YmxpYyBsb2FkZWRUZW1wbGF0ZXM6IFF1ZXJ5TGlzdDxUZW1wbGF0ZVJlZjxhbnk+PjtcblxuICBwcml2YXRlIGhhc1ZpZXcgPSBmYWxzZTtcbiAgcHJpdmF0ZSBza2VsZXRvblZpZXdzOiBFbWJlZGRlZFZpZXdSZWY8Tm92b1NrZWxldG9uRGlyZWN0aXZlPltdID0gW107XG4gIHByaXZhdGUgbG9hZGVkVmlld3M6IEVtYmVkZGVkVmlld1JlZjxOb3ZvTG9hZGVkRGlyZWN0aXZlPltdID0gW107XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSB2aWV3Q29udGFpbmVyOiBWaWV3Q29udGFpbmVyUmVmKSB7fVxuXG4gIEBJbnB1dCgpXG4gIHNldCBpc0xvYWRpbmcoY29uZGl0aW9uOiBib29sZWFuKSB7XG4gICAgaWYgKCFjb25kaXRpb24gJiYgIXRoaXMuaGFzVmlldykge1xuICAgICAgdGhpcy5kZXN0cm95Vmlld3ModGhpcy5sb2FkZWRWaWV3cyk7XG4gICAgICB0aGlzLnNrZWxldG9uVmlld3MgPSB0aGlzLmNyZWF0ZVZpZXdzKHRoaXMuc2tlbGV0b25UZW1wbGF0ZXMpO1xuICAgICAgdGhpcy5oYXNWaWV3ID0gdHJ1ZTtcbiAgICB9IGVsc2UgaWYgKGNvbmRpdGlvbiAmJiB0aGlzLmhhc1ZpZXcpIHtcbiAgICAgIHRoaXMuZGVzdHJveVZpZXdzKHRoaXMuc2tlbGV0b25WaWV3cyk7XG4gICAgICB0aGlzLmxvYWRlZFZpZXdzID0gdGhpcy5jcmVhdGVWaWV3cyh0aGlzLmxvYWRlZFRlbXBsYXRlcyk7XG4gICAgICB0aGlzLmhhc1ZpZXcgPSBmYWxzZTtcbiAgICB9XG4gIH1cbiAgY3JlYXRlVmlld3ModGVtcGxhdGVzOiBRdWVyeUxpc3Q8VGVtcGxhdGVSZWY8YW55Pj4pIHtcbiAgICByZXR1cm4gdGVtcGxhdGVzICYmIHRlbXBsYXRlcy5tYXAoKHYpID0+IHRoaXMudmlld0NvbnRhaW5lci5jcmVhdGVFbWJlZGRlZFZpZXcodikpO1xuICB9XG4gIGRlc3Ryb3lWaWV3cyh2aWV3czogRW1iZWRkZWRWaWV3UmVmPGFueT5bXSkge1xuICAgIGlmICh2aWV3cykge1xuICAgICAgZm9yIChjb25zdCB2aWV3IG9mIHZpZXdzKSB7XG4gICAgICAgIHZpZXcuZGVzdHJveSgpO1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuIl19