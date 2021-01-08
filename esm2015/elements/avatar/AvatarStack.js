// NG2
import { Component, Input, QueryList, ViewChildren } from '@angular/core';
import { NovoAvatarElement } from './Avatar';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "./Avatar";
function NovoAvatarStackElement_novo_avatar_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "novo-avatar", 1);
} }
const _c0 = ["*"];
export class NovoAvatarStackElement {
    constructor() {
        this.total = 0;
        this.showTotal = false;
        this.remainingCount = 0;
    }
    ngAfterViewInit() {
        // viewChildren is set
        if (this.total - this.viewChildren.length > 0) {
            this.remainingCount = this.total - this.viewChildren.length;
            this.showTotal = true;
        }
    }
}
NovoAvatarStackElement.ɵfac = function NovoAvatarStackElement_Factory(t) { return new (t || NovoAvatarStackElement)(); };
NovoAvatarStackElement.ɵcmp = i0.ɵɵdefineComponent({ type: NovoAvatarStackElement, selectors: [["novo-avatar-stack"]], viewQuery: function NovoAvatarStackElement_Query(rf, ctx) { if (rf & 1) {
        i0.ɵɵviewQuery(NovoAvatarElement, true);
    } if (rf & 2) {
        var _t;
        i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.viewChildren = _t);
    } }, inputs: { total: "total" }, ngContentSelectors: _c0, decls: 2, vars: 1, consts: [["label", "+5", 4, "ngIf"], ["label", "+5"]], template: function NovoAvatarStackElement_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵprojectionDef();
        i0.ɵɵprojection(0);
        i0.ɵɵtemplate(1, NovoAvatarStackElement_novo_avatar_1_Template, 1, 0, "novo-avatar", 0);
    } if (rf & 2) {
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx.showTotal);
    } }, directives: [i1.NgIf, i2.NovoAvatarElement], styles: ["@-webkit-keyframes rotate{0%{transform:rotate(0deg)}75%{transform:rotate(200deg)}to{transform:rotate(180deg)}}@keyframes rotate{0%{transform:rotate(0deg)}75%{transform:rotate(200deg)}to{transform:rotate(180deg)}}@-webkit-keyframes half-rotate{0%{transform:rotate(45deg)}75%{transform:rotate(100deg)}to{transform:rotate(90deg)}}@keyframes half-rotate{0%{transform:rotate(45deg)}75%{transform:rotate(100deg)}to{transform:rotate(90deg)}}@-webkit-keyframes rotateBack{0%{transform:rotate(90deg)}to{transform:rotate(0deg)}}@keyframes rotateBack{0%{transform:rotate(90deg)}to{transform:rotate(0deg)}}@-webkit-keyframes show{0%{opacity:0;transform:translateX(-100%)}75%{transform:translateX(0)}to{opacity:1;transform:translateX(0)}}@keyframes show{0%{opacity:0;transform:translateX(-100%)}75%{transform:translateX(0)}to{opacity:1;transform:translateX(0)}}[_nghost-%COMP%]{display:inline-flex;flex-flow:row nowrap}[_nghost-%COMP%]  novo-avatar{transition:all .1s ease-in-out}[_nghost-%COMP%]  novo-avatar img{border:1px solid #fff}[_nghost-%COMP%]  novo-avatar+novo-avatar{margin-left:-15px}[_nghost-%COMP%]  novo-avatar:first-child{z-index:5}[_nghost-%COMP%]  novo-avatar:nth-child(2){z-index:4}[_nghost-%COMP%]  novo-avatar:nth-child(3){z-index:3}[_nghost-%COMP%]  novo-avatar:nth-child(4){z-index:2}[_nghost-%COMP%]  novo-avatar:nth-child(5){z-index:1}[_nghost-%COMP%]  novo-avatar:nth-child(n+6){display:none;margin-left:-15px;opacity:0;z-index:0}[_nghost-%COMP%]:hover  novo-avatar{margin-left:0;margin-right:1px}[_nghost-%COMP%]:hover  novo-avatar:nth-child(n+6){display:unset;opacity:1}"] });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(NovoAvatarStackElement, [{
        type: Component,
        args: [{
                selector: 'novo-avatar-stack',
                styleUrls: ['./AvatarStack.scss'],
                template: `
    <ng-content></ng-content>
    <novo-avatar *ngIf="showTotal" label="+5"></novo-avatar>
  `,
            }]
    }], null, { total: [{
            type: Input
        }], viewChildren: [{
            type: ViewChildren,
            args: [NovoAvatarElement]
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQXZhdGFyU3RhY2suanMiLCJzb3VyY2VSb290IjoiL2hvbWUvdHJhdmlzL2J1aWxkL2J1bGxob3JuL25vdm8tZWxlbWVudHMvcHJvamVjdHMvbm92by1lbGVtZW50cy9zcmMvIiwic291cmNlcyI6WyJlbGVtZW50cy9hdmF0YXIvQXZhdGFyU3RhY2sudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsTUFBTTtBQUNOLE9BQU8sRUFBaUIsU0FBUyxFQUFFLEtBQUssRUFBRSxTQUFTLEVBQUUsWUFBWSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pGLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLFVBQVUsQ0FBQzs7Ozs7SUFPekMsaUNBQXdEOzs7QUFHNUQsTUFBTSxPQUFPLHNCQUFzQjtJQVJuQztRQVVFLFVBQUssR0FBVyxDQUFDLENBQUM7UUFJbEIsY0FBUyxHQUFZLEtBQUssQ0FBQztRQUMzQixtQkFBYyxHQUFXLENBQUMsQ0FBQztLQVE1QjtJQVBDLGVBQWU7UUFDYixzQkFBc0I7UUFDdEIsSUFBSSxJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUMsTUFBTSxHQUFHLENBQUMsRUFBRTtZQUM3QyxJQUFJLENBQUMsY0FBYyxHQUFHLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyxNQUFNLENBQUM7WUFDNUQsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUM7U0FDdkI7SUFDSCxDQUFDOzs0RkFkVSxzQkFBc0I7MkRBQXRCLHNCQUFzQjt1QkFHbkIsaUJBQWlCOzs7Ozs7UUFQN0Isa0JBQVk7UUFDWix1RkFBMEM7O1FBQTdCLGVBQWlCO1FBQWpCLG9DQUFpQjs7a0RBR3JCLHNCQUFzQjtjQVJsQyxTQUFTO2VBQUM7Z0JBQ1QsUUFBUSxFQUFFLG1CQUFtQjtnQkFDN0IsU0FBUyxFQUFFLENBQUMsb0JBQW9CLENBQUM7Z0JBQ2pDLFFBQVEsRUFBRTs7O0dBR1Q7YUFDRjtnQkFHQyxLQUFLO2tCQURKLEtBQUs7WUFHTixZQUFZO2tCQURYLFlBQVk7bUJBQUMsaUJBQWlCIiwic291cmNlc0NvbnRlbnQiOlsiLy8gTkcyXG5pbXBvcnQgeyBBZnRlclZpZXdJbml0LCBDb21wb25lbnQsIElucHV0LCBRdWVyeUxpc3QsIFZpZXdDaGlsZHJlbiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTm92b0F2YXRhckVsZW1lbnQgfSBmcm9tICcuL0F2YXRhcic7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ25vdm8tYXZhdGFyLXN0YWNrJyxcbiAgc3R5bGVVcmxzOiBbJy4vQXZhdGFyU3RhY2suc2NzcyddLFxuICB0ZW1wbGF0ZTogYFxuICAgIDxuZy1jb250ZW50PjwvbmctY29udGVudD5cbiAgICA8bm92by1hdmF0YXIgKm5nSWY9XCJzaG93VG90YWxcIiBsYWJlbD1cIis1XCI+PC9ub3ZvLWF2YXRhcj5cbiAgYCxcbn0pXG5leHBvcnQgY2xhc3MgTm92b0F2YXRhclN0YWNrRWxlbWVudCBpbXBsZW1lbnRzIEFmdGVyVmlld0luaXQge1xuICBASW5wdXQoKVxuICB0b3RhbDogbnVtYmVyID0gMDtcbiAgQFZpZXdDaGlsZHJlbihOb3ZvQXZhdGFyRWxlbWVudClcbiAgdmlld0NoaWxkcmVuITogUXVlcnlMaXN0PE5vdm9BdmF0YXJFbGVtZW50PjtcblxuICBzaG93VG90YWw6IGJvb2xlYW4gPSBmYWxzZTtcbiAgcmVtYWluaW5nQ291bnQ6IG51bWJlciA9IDA7XG4gIG5nQWZ0ZXJWaWV3SW5pdCgpIHtcbiAgICAvLyB2aWV3Q2hpbGRyZW4gaXMgc2V0XG4gICAgaWYgKHRoaXMudG90YWwgLSB0aGlzLnZpZXdDaGlsZHJlbi5sZW5ndGggPiAwKSB7XG4gICAgICB0aGlzLnJlbWFpbmluZ0NvdW50ID0gdGhpcy50b3RhbCAtIHRoaXMudmlld0NoaWxkcmVuLmxlbmd0aDtcbiAgICAgIHRoaXMuc2hvd1RvdGFsID0gdHJ1ZTtcbiAgICB9XG4gIH1cbn1cbiJdfQ==