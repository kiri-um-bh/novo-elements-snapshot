// NG2
import { Component, ContentChildren, forwardRef, HostBinding, Input, QueryList } from '@angular/core';
import { NovoProgressBarElement } from './ProgressBar';
import * as i0 from "@angular/core";
const _c0 = ["*"];
export var ProgressAppearance;
(function (ProgressAppearance) {
    ProgressAppearance["LINEAR"] = "linear";
    ProgressAppearance["RADIAL"] = "radial";
})(ProgressAppearance || (ProgressAppearance = {}));
export class NovoProgressElement {
    constructor() {
        this.total = 100;
        this.radius = 54;
        this.striped = false;
        // Private vars for getters
        this._appearance = ProgressAppearance.LINEAR;
        this._disabled = false;
    }
    get appearance() {
        return this._appearance;
    }
    set appearance(value) {
        if (this._appearance !== value) {
            this._appearance = value;
            this._updateBarAppearance();
        }
    }
    // Disabled State
    get disabled() {
        return this._disabled;
    }
    set disabled(value) {
        this._disabled = !!value;
    }
    ngAfterContentInit() {
        this._updateBarRadius();
    }
    _updateBarAppearance() {
        if (this._bars) {
            this._bars.forEach((bar) => {
                bar.appearance = this.appearance;
            });
        }
    }
    _updateBarRadius() {
        if (this._bars) {
            this._bars.forEach((bar, i) => {
                bar.radius = this.radius - i * 5;
            });
        }
    }
}
NovoProgressElement.ɵfac = function NovoProgressElement_Factory(t) { return new (t || NovoProgressElement)(); };
NovoProgressElement.ɵcmp = i0.ɵɵdefineComponent({ type: NovoProgressElement, selectors: [["novo-progress"]], contentQueries: function NovoProgressElement_ContentQueries(rf, ctx, dirIndex) { if (rf & 1) {
        i0.ɵɵcontentQuery(dirIndex, NovoProgressBarElement, true);
    } if (rf & 2) {
        var _t;
        i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx._bars = _t);
    } }, hostVars: 6, hostBindings: function NovoProgressElement_HostBindings(rf, ctx) { if (rf & 2) {
        i0.ɵɵclassMap(ctx.appearance);
        i0.ɵɵclassProp("striped", ctx.striped)("disabled", ctx.disabled);
    } }, inputs: { color: "color", theme: "theme", total: "total", radius: "radius", striped: "striped", appearance: "appearance", disabled: "disabled" }, ngContentSelectors: _c0, decls: 1, vars: 0, template: function NovoProgressElement_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵprojectionDef();
        i0.ɵɵprojection(0);
    } }, styles: ["@-webkit-keyframes rotate{0%{transform:rotate(0deg)}75%{transform:rotate(200deg)}to{transform:rotate(180deg)}}@keyframes rotate{0%{transform:rotate(0deg)}75%{transform:rotate(200deg)}to{transform:rotate(180deg)}}@-webkit-keyframes half-rotate{0%{transform:rotate(45deg)}75%{transform:rotate(100deg)}to{transform:rotate(90deg)}}@keyframes half-rotate{0%{transform:rotate(45deg)}75%{transform:rotate(100deg)}to{transform:rotate(90deg)}}@-webkit-keyframes rotateBack{0%{transform:rotate(90deg)}to{transform:rotate(0deg)}}@keyframes rotateBack{0%{transform:rotate(90deg)}to{transform:rotate(0deg)}}@-webkit-keyframes show{0%{opacity:0;transform:translateX(-100%)}75%{transform:translateX(0)}to{opacity:1;transform:translateX(0)}}@keyframes show{0%{opacity:0;transform:translateX(-100%)}75%{transform:translateX(0)}to{opacity:1;transform:translateX(0)}}[_nghost-%COMP%]{border-radius:.2em;display:flex;position:relative}.striped[_nghost-%COMP%]{background-image:linear-gradient(45deg,rgba(0,0,0,.25) 25%,transparent 0,transparent 50%,rgba(0,0,0,.25) 0,rgba(0,0,0,.25) 75%,transparent 0,transparent);background-size:20px 20px}.linear[_nghost-%COMP%]{background-color:#f4f4f4;border:1px solid #cccdcc;height:1.2em;width:200px}.radial[_nghost-%COMP%]{height:9.2em;width:9.2em}"] });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(NovoProgressElement, [{
        type: Component,
        args: [{
                selector: 'novo-progress',
                styleUrls: ['./Progress.scss'],
                template: ` <ng-content></ng-content> `,
            }]
    }], null, { color: [{
            type: Input
        }], theme: [{
            type: Input
        }], total: [{
            type: Input
        }], radius: [{
            type: Input
        }], striped: [{
            type: HostBinding,
            args: ['class.striped']
        }, {
            type: Input
        }], appearance: [{
            type: HostBinding,
            args: ['class']
        }, {
            type: Input
        }], disabled: [{
            type: Input
        }, {
            type: HostBinding,
            args: ['class.disabled']
        }], _bars: [{
            type: ContentChildren,
            args: [forwardRef(() => NovoProgressBarElement), { descendants: true }]
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUHJvZ3Jlc3MuanMiLCJzb3VyY2VSb290IjoiL2hvbWUvdHJhdmlzL2J1aWxkL2J1bGxob3JuL25vdm8tZWxlbWVudHMvcHJvamVjdHMvbm92by1lbGVtZW50cy9zcmMvIiwic291cmNlcyI6WyJlbGVtZW50cy9wcm9ncmVzcy9Qcm9ncmVzcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxNQUFNO0FBQ04sT0FBTyxFQUFvQixTQUFTLEVBQUUsZUFBZSxFQUFFLFVBQVUsRUFBRSxXQUFXLEVBQUUsS0FBSyxFQUFFLFNBQVMsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN4SCxPQUFPLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSxlQUFlLENBQUM7OztBQUV2RCxNQUFNLENBQU4sSUFBWSxrQkFHWDtBQUhELFdBQVksa0JBQWtCO0lBQzVCLHVDQUFpQixDQUFBO0lBQ2pCLHVDQUFpQixDQUFBO0FBQ25CLENBQUMsRUFIVyxrQkFBa0IsS0FBbEIsa0JBQWtCLFFBRzdCO0FBT0QsTUFBTSxPQUFPLG1CQUFtQjtJQUxoQztRQVNXLFVBQUssR0FBVyxHQUFHLENBQUM7UUFDcEIsV0FBTSxHQUFXLEVBQUUsQ0FBQztRQUk3QixZQUFPLEdBQVksS0FBSyxDQUFDO1FBRXpCLDJCQUEyQjtRQUNuQixnQkFBVyxHQUF1QixrQkFBa0IsQ0FBQyxNQUFNLENBQUM7UUFDNUQsY0FBUyxHQUFZLEtBQUssQ0FBQztLQThDcEM7SUE1Q0MsSUFFSSxVQUFVO1FBQ1osT0FBTyxJQUFJLENBQUMsV0FBVyxDQUFDO0lBQzFCLENBQUM7SUFDRCxJQUFJLFVBQVUsQ0FBQyxLQUFrQztRQUMvQyxJQUFJLElBQUksQ0FBQyxXQUFXLEtBQUssS0FBSyxFQUFFO1lBQzlCLElBQUksQ0FBQyxXQUFXLEdBQUcsS0FBMkIsQ0FBQztZQUMvQyxJQUFJLENBQUMsb0JBQW9CLEVBQUUsQ0FBQztTQUM3QjtJQUNILENBQUM7SUFFRCxpQkFBaUI7SUFDakIsSUFFSSxRQUFRO1FBQ1YsT0FBTyxJQUFJLENBQUMsU0FBUyxDQUFDO0lBQ3hCLENBQUM7SUFDRCxJQUFJLFFBQVEsQ0FBQyxLQUFjO1FBQ3pCLElBQUksQ0FBQyxTQUFTLEdBQUcsQ0FBQyxDQUFDLEtBQUssQ0FBQztJQUMzQixDQUFDO0lBS0Qsa0JBQWtCO1FBQ2hCLElBQUksQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDO0lBQzFCLENBQUM7SUFFTyxvQkFBb0I7UUFDMUIsSUFBSSxJQUFJLENBQUMsS0FBSyxFQUFFO1lBQ2QsSUFBSSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsQ0FBQyxHQUFHLEVBQUUsRUFBRTtnQkFDekIsR0FBRyxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUMsVUFBZ0MsQ0FBQztZQUN6RCxDQUFDLENBQUMsQ0FBQztTQUNKO0lBQ0gsQ0FBQztJQUVPLGdCQUFnQjtRQUN0QixJQUFJLElBQUksQ0FBQyxLQUFLLEVBQUU7WUFDZCxJQUFJLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxDQUFDLEdBQUcsRUFBRSxDQUFDLEVBQUUsRUFBRTtnQkFDNUIsR0FBRyxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsTUFBTSxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUM7WUFDbkMsQ0FBQyxDQUFDLENBQUM7U0FDSjtJQUNILENBQUM7O3NGQTFEVSxtQkFBbUI7d0RBQW5CLG1CQUFtQjtvQ0FxQ0ksc0JBQXNCOzs7Ozs7Ozs7UUF2QzVDLGtCQUFZOztrREFFYixtQkFBbUI7Y0FML0IsU0FBUztlQUFDO2dCQUNULFFBQVEsRUFBRSxlQUFlO2dCQUN6QixTQUFTLEVBQUUsQ0FBQyxpQkFBaUIsQ0FBQztnQkFDOUIsUUFBUSxFQUFFLDZCQUE2QjthQUN4QztnQkFHQyxLQUFLO2tCQURKLEtBQUs7WUFFRyxLQUFLO2tCQUFiLEtBQUs7WUFDRyxLQUFLO2tCQUFiLEtBQUs7WUFDRyxNQUFNO2tCQUFkLEtBQUs7WUFJTixPQUFPO2tCQUZOLFdBQVc7bUJBQUMsZUFBZTs7a0JBQzNCLEtBQUs7WUFTRixVQUFVO2tCQUZiLFdBQVc7bUJBQUMsT0FBTzs7a0JBQ25CLEtBQUs7WUFjRixRQUFRO2tCQUZYLEtBQUs7O2tCQUNMLFdBQVc7bUJBQUMsZ0JBQWdCO1lBUzdCLEtBQUs7a0JBREosZUFBZTttQkFBQyxVQUFVLENBQUMsR0FBRyxFQUFFLENBQUMsc0JBQXNCLENBQUMsRUFBRSxFQUFFLFdBQVcsRUFBRSxJQUFJLEVBQUUiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBORzJcbmltcG9ydCB7IEFmdGVyQ29udGVudEluaXQsIENvbXBvbmVudCwgQ29udGVudENoaWxkcmVuLCBmb3J3YXJkUmVmLCBIb3N0QmluZGluZywgSW5wdXQsIFF1ZXJ5TGlzdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTm92b1Byb2dyZXNzQmFyRWxlbWVudCB9IGZyb20gJy4vUHJvZ3Jlc3NCYXInO1xuXG5leHBvcnQgZW51bSBQcm9ncmVzc0FwcGVhcmFuY2Uge1xuICBMSU5FQVIgPSAnbGluZWFyJyxcbiAgUkFESUFMID0gJ3JhZGlhbCcsXG59XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ25vdm8tcHJvZ3Jlc3MnLFxuICBzdHlsZVVybHM6IFsnLi9Qcm9ncmVzcy5zY3NzJ10sXG4gIHRlbXBsYXRlOiBgIDxuZy1jb250ZW50PjwvbmctY29udGVudD4gYCxcbn0pXG5leHBvcnQgY2xhc3MgTm92b1Byb2dyZXNzRWxlbWVudCBpbXBsZW1lbnRzIEFmdGVyQ29udGVudEluaXQge1xuICBASW5wdXQoKVxuICBjb2xvcjogc3RyaW5nO1xuICBASW5wdXQoKSB0aGVtZTogc3RyaW5nO1xuICBASW5wdXQoKSB0b3RhbDogbnVtYmVyID0gMTAwO1xuICBASW5wdXQoKSByYWRpdXM6IG51bWJlciA9IDU0O1xuXG4gIEBIb3N0QmluZGluZygnY2xhc3Muc3RyaXBlZCcpXG4gIEBJbnB1dCgpXG4gIHN0cmlwZWQ6IGJvb2xlYW4gPSBmYWxzZTtcblxuICAvLyBQcml2YXRlIHZhcnMgZm9yIGdldHRlcnNcbiAgcHJpdmF0ZSBfYXBwZWFyYW5jZTogUHJvZ3Jlc3NBcHBlYXJhbmNlID0gUHJvZ3Jlc3NBcHBlYXJhbmNlLkxJTkVBUjtcbiAgcHJpdmF0ZSBfZGlzYWJsZWQ6IGJvb2xlYW4gPSBmYWxzZTtcblxuICBASG9zdEJpbmRpbmcoJ2NsYXNzJylcbiAgQElucHV0KClcbiAgZ2V0IGFwcGVhcmFuY2UoKTogUHJvZ3Jlc3NBcHBlYXJhbmNlIHwgc3RyaW5nIHtcbiAgICByZXR1cm4gdGhpcy5fYXBwZWFyYW5jZTtcbiAgfVxuICBzZXQgYXBwZWFyYW5jZSh2YWx1ZTogUHJvZ3Jlc3NBcHBlYXJhbmNlIHwgc3RyaW5nKSB7XG4gICAgaWYgKHRoaXMuX2FwcGVhcmFuY2UgIT09IHZhbHVlKSB7XG4gICAgICB0aGlzLl9hcHBlYXJhbmNlID0gdmFsdWUgYXMgUHJvZ3Jlc3NBcHBlYXJhbmNlO1xuICAgICAgdGhpcy5fdXBkYXRlQmFyQXBwZWFyYW5jZSgpO1xuICAgIH1cbiAgfVxuXG4gIC8vIERpc2FibGVkIFN0YXRlXG4gIEBJbnB1dCgpXG4gIEBIb3N0QmluZGluZygnY2xhc3MuZGlzYWJsZWQnKVxuICBnZXQgZGlzYWJsZWQoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuX2Rpc2FibGVkO1xuICB9XG4gIHNldCBkaXNhYmxlZCh2YWx1ZTogYm9vbGVhbikge1xuICAgIHRoaXMuX2Rpc2FibGVkID0gISF2YWx1ZTtcbiAgfVxuXG4gIEBDb250ZW50Q2hpbGRyZW4oZm9yd2FyZFJlZigoKSA9PiBOb3ZvUHJvZ3Jlc3NCYXJFbGVtZW50KSwgeyBkZXNjZW5kYW50czogdHJ1ZSB9KVxuICBfYmFyczogUXVlcnlMaXN0PE5vdm9Qcm9ncmVzc0JhckVsZW1lbnQ+O1xuXG4gIG5nQWZ0ZXJDb250ZW50SW5pdCgpIHtcbiAgICB0aGlzLl91cGRhdGVCYXJSYWRpdXMoKTtcbiAgfVxuXG4gIHByaXZhdGUgX3VwZGF0ZUJhckFwcGVhcmFuY2UoKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuX2JhcnMpIHtcbiAgICAgIHRoaXMuX2JhcnMuZm9yRWFjaCgoYmFyKSA9PiB7XG4gICAgICAgIGJhci5hcHBlYXJhbmNlID0gdGhpcy5hcHBlYXJhbmNlIGFzIFByb2dyZXNzQXBwZWFyYW5jZTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgX3VwZGF0ZUJhclJhZGl1cygpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5fYmFycykge1xuICAgICAgdGhpcy5fYmFycy5mb3JFYWNoKChiYXIsIGkpID0+IHtcbiAgICAgICAgYmFyLnJhZGl1cyA9IHRoaXMucmFkaXVzIC0gaSAqIDU7XG4gICAgICB9KTtcbiAgICB9XG4gIH1cbn1cbiJdfQ==