// NG2
import { Component, ContentChildren, forwardRef, HostBinding, Input, QueryList } from '@angular/core';
import { NovoProgressBarElement } from './ProgressBar';
import { NOVO_PROGRESS_CONTAINER, ProgressAppearance } from './ProgressConstants';
import * as i0 from "@angular/core";
const _c0 = ["*"];
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
    } }, inputs: { color: "color", theme: "theme", total: "total", radius: "radius", striped: "striped", appearance: "appearance", disabled: "disabled" }, features: [i0.ɵɵProvidersFeature([
            {
                provide: NOVO_PROGRESS_CONTAINER,
                useExisting: NovoProgressElement,
            },
        ])], ngContentSelectors: _c0, decls: 1, vars: 0, template: function NovoProgressElement_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵprojectionDef();
        i0.ɵɵprojection(0);
    } }, styles: ["@-webkit-keyframes rotate{0%{transform:rotate(0deg)}75%{transform:rotate(200deg)}to{transform:rotate(180deg)}}@keyframes rotate{0%{transform:rotate(0deg)}75%{transform:rotate(200deg)}to{transform:rotate(180deg)}}@-webkit-keyframes half-rotate{0%{transform:rotate(45deg)}75%{transform:rotate(100deg)}to{transform:rotate(90deg)}}@keyframes half-rotate{0%{transform:rotate(45deg)}75%{transform:rotate(100deg)}to{transform:rotate(90deg)}}@-webkit-keyframes rotateBack{0%{transform:rotate(90deg)}to{transform:rotate(0deg)}}@keyframes rotateBack{0%{transform:rotate(90deg)}to{transform:rotate(0deg)}}@-webkit-keyframes show{0%{opacity:0;transform:translateX(-100%)}75%{transform:translateX(0)}to{opacity:1;transform:translateX(0)}}@keyframes show{0%{opacity:0;transform:translateX(-100%)}75%{transform:translateX(0)}to{opacity:1;transform:translateX(0)}}[_nghost-%COMP%]{border-radius:.2em;display:flex;position:relative}.striped[_nghost-%COMP%]{background-image:linear-gradient(45deg,rgba(0,0,0,.25) 25%,transparent 0,transparent 50%,rgba(0,0,0,.25) 0,rgba(0,0,0,.25) 75%,transparent 0,transparent);background-size:20px 20px}.linear[_nghost-%COMP%]{background-color:#f7f7f7;border:1px solid #cccdcc;height:1.2em;width:200px}.radial[_nghost-%COMP%]{height:9.2em;width:9.2em}"] });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(NovoProgressElement, [{
        type: Component,
        args: [{
                selector: 'novo-progress',
                styleUrls: ['./Progress.scss'],
                template: ` <ng-content></ng-content> `,
                providers: [
                    {
                        provide: NOVO_PROGRESS_CONTAINER,
                        useExisting: NovoProgressElement,
                    },
                ],
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUHJvZ3Jlc3MuanMiLCJzb3VyY2VSb290IjoiL2hvbWUvcnVubmVyL3dvcmsvbm92by1lbGVtZW50cy9ub3ZvLWVsZW1lbnRzL3Byb2plY3RzL25vdm8tZWxlbWVudHMvc3JjLyIsInNvdXJjZXMiOlsiZWxlbWVudHMvcHJvZ3Jlc3MvUHJvZ3Jlc3MudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsTUFBTTtBQUNOLE9BQU8sRUFBb0IsU0FBUyxFQUFFLGVBQWUsRUFBRSxVQUFVLEVBQUUsV0FBVyxFQUFFLEtBQUssRUFBRSxTQUFTLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDeEgsT0FBTyxFQUFFLHNCQUFzQixFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3ZELE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxrQkFBa0IsRUFBRSxNQUFNLHFCQUFxQixDQUFDOzs7QUFhbEYsTUFBTSxPQUFPLG1CQUFtQjtJQVhoQztRQWVXLFVBQUssR0FBVyxHQUFHLENBQUM7UUFDcEIsV0FBTSxHQUFXLEVBQUUsQ0FBQztRQUk3QixZQUFPLEdBQVksS0FBSyxDQUFDO1FBRXpCLDJCQUEyQjtRQUNuQixnQkFBVyxHQUF1QixrQkFBa0IsQ0FBQyxNQUFNLENBQUM7UUFDNUQsY0FBUyxHQUFZLEtBQUssQ0FBQztLQThDcEM7SUE1Q0MsSUFFSSxVQUFVO1FBQ1osT0FBTyxJQUFJLENBQUMsV0FBVyxDQUFDO0lBQzFCLENBQUM7SUFDRCxJQUFJLFVBQVUsQ0FBQyxLQUF5QjtRQUN0QyxJQUFJLElBQUksQ0FBQyxXQUFXLEtBQUssS0FBSyxFQUFFO1lBQzlCLElBQUksQ0FBQyxXQUFXLEdBQUcsS0FBMkIsQ0FBQztZQUMvQyxJQUFJLENBQUMsb0JBQW9CLEVBQUUsQ0FBQztTQUM3QjtJQUNILENBQUM7SUFFRCxpQkFBaUI7SUFDakIsSUFFSSxRQUFRO1FBQ1YsT0FBTyxJQUFJLENBQUMsU0FBUyxDQUFDO0lBQ3hCLENBQUM7SUFDRCxJQUFJLFFBQVEsQ0FBQyxLQUFjO1FBQ3pCLElBQUksQ0FBQyxTQUFTLEdBQUcsQ0FBQyxDQUFDLEtBQUssQ0FBQztJQUMzQixDQUFDO0lBS0Qsa0JBQWtCO1FBQ2hCLElBQUksQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDO0lBQzFCLENBQUM7SUFFTyxvQkFBb0I7UUFDMUIsSUFBSSxJQUFJLENBQUMsS0FBSyxFQUFFO1lBQ2QsSUFBSSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsQ0FBQyxHQUFHLEVBQUUsRUFBRTtnQkFDekIsR0FBRyxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUMsVUFBZ0MsQ0FBQztZQUN6RCxDQUFDLENBQUMsQ0FBQztTQUNKO0lBQ0gsQ0FBQztJQUVPLGdCQUFnQjtRQUN0QixJQUFJLElBQUksQ0FBQyxLQUFLLEVBQUU7WUFDZCxJQUFJLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxDQUFDLEdBQUcsRUFBRSxDQUFDLEVBQUUsRUFBRTtnQkFDNUIsR0FBRyxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsTUFBTSxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUM7WUFDbkMsQ0FBQyxDQUFDLENBQUM7U0FDSjtJQUNILENBQUM7O3NGQTFEVSxtQkFBbUI7d0RBQW5CLG1CQUFtQjtvQ0FxQ0ksc0JBQXNCOzs7Ozs7OzRMQTVDN0M7WUFDVDtnQkFDRSxPQUFPLEVBQUUsdUJBQXVCO2dCQUNoQyxXQUFXLEVBQUUsbUJBQW1CO2FBQ2pDO1NBQ0Y7O1FBTlcsa0JBQVk7O2tEQVFiLG1CQUFtQjtjQVgvQixTQUFTO2VBQUM7Z0JBQ1QsUUFBUSxFQUFFLGVBQWU7Z0JBQ3pCLFNBQVMsRUFBRSxDQUFDLGlCQUFpQixDQUFDO2dCQUM5QixRQUFRLEVBQUUsNkJBQTZCO2dCQUN2QyxTQUFTLEVBQUU7b0JBQ1Q7d0JBQ0UsT0FBTyxFQUFFLHVCQUF1Qjt3QkFDaEMsV0FBVyxFQUFFLG1CQUFtQjtxQkFDakM7aUJBQ0Y7YUFDRjtnQkFHQyxLQUFLO2tCQURKLEtBQUs7WUFFRyxLQUFLO2tCQUFiLEtBQUs7WUFDRyxLQUFLO2tCQUFiLEtBQUs7WUFDRyxNQUFNO2tCQUFkLEtBQUs7WUFJTixPQUFPO2tCQUZOLFdBQVc7bUJBQUMsZUFBZTs7a0JBQzNCLEtBQUs7WUFTRixVQUFVO2tCQUZiLFdBQVc7bUJBQUMsT0FBTzs7a0JBQ25CLEtBQUs7WUFjRixRQUFRO2tCQUZYLEtBQUs7O2tCQUNMLFdBQVc7bUJBQUMsZ0JBQWdCO1lBUzdCLEtBQUs7a0JBREosZUFBZTttQkFBQyxVQUFVLENBQUMsR0FBRyxFQUFFLENBQUMsc0JBQXNCLENBQUMsRUFBRSxFQUFFLFdBQVcsRUFBRSxJQUFJLEVBQUUiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBORzJcbmltcG9ydCB7IEFmdGVyQ29udGVudEluaXQsIENvbXBvbmVudCwgQ29udGVudENoaWxkcmVuLCBmb3J3YXJkUmVmLCBIb3N0QmluZGluZywgSW5wdXQsIFF1ZXJ5TGlzdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTm92b1Byb2dyZXNzQmFyRWxlbWVudCB9IGZyb20gJy4vUHJvZ3Jlc3NCYXInO1xuaW1wb3J0IHsgTk9WT19QUk9HUkVTU19DT05UQUlORVIsIFByb2dyZXNzQXBwZWFyYW5jZSB9IGZyb20gJy4vUHJvZ3Jlc3NDb25zdGFudHMnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdub3ZvLXByb2dyZXNzJyxcbiAgc3R5bGVVcmxzOiBbJy4vUHJvZ3Jlc3Muc2NzcyddLFxuICB0ZW1wbGF0ZTogYCA8bmctY29udGVudD48L25nLWNvbnRlbnQ+IGAsXG4gIHByb3ZpZGVyczogW1xuICAgIHtcbiAgICAgIHByb3ZpZGU6IE5PVk9fUFJPR1JFU1NfQ09OVEFJTkVSLFxuICAgICAgdXNlRXhpc3Rpbmc6IE5vdm9Qcm9ncmVzc0VsZW1lbnQsXG4gICAgfSxcbiAgXSxcbn0pXG5leHBvcnQgY2xhc3MgTm92b1Byb2dyZXNzRWxlbWVudCBpbXBsZW1lbnRzIEFmdGVyQ29udGVudEluaXQge1xuICBASW5wdXQoKVxuICBjb2xvcjogc3RyaW5nO1xuICBASW5wdXQoKSB0aGVtZTogc3RyaW5nO1xuICBASW5wdXQoKSB0b3RhbDogbnVtYmVyID0gMTAwO1xuICBASW5wdXQoKSByYWRpdXM6IG51bWJlciA9IDU0O1xuXG4gIEBIb3N0QmluZGluZygnY2xhc3Muc3RyaXBlZCcpXG4gIEBJbnB1dCgpXG4gIHN0cmlwZWQ6IGJvb2xlYW4gPSBmYWxzZTtcblxuICAvLyBQcml2YXRlIHZhcnMgZm9yIGdldHRlcnNcbiAgcHJpdmF0ZSBfYXBwZWFyYW5jZTogUHJvZ3Jlc3NBcHBlYXJhbmNlID0gUHJvZ3Jlc3NBcHBlYXJhbmNlLkxJTkVBUjtcbiAgcHJpdmF0ZSBfZGlzYWJsZWQ6IGJvb2xlYW4gPSBmYWxzZTtcblxuICBASG9zdEJpbmRpbmcoJ2NsYXNzJylcbiAgQElucHV0KClcbiAgZ2V0IGFwcGVhcmFuY2UoKTogUHJvZ3Jlc3NBcHBlYXJhbmNlIHtcbiAgICByZXR1cm4gdGhpcy5fYXBwZWFyYW5jZTtcbiAgfVxuICBzZXQgYXBwZWFyYW5jZSh2YWx1ZTogUHJvZ3Jlc3NBcHBlYXJhbmNlKSB7XG4gICAgaWYgKHRoaXMuX2FwcGVhcmFuY2UgIT09IHZhbHVlKSB7XG4gICAgICB0aGlzLl9hcHBlYXJhbmNlID0gdmFsdWUgYXMgUHJvZ3Jlc3NBcHBlYXJhbmNlO1xuICAgICAgdGhpcy5fdXBkYXRlQmFyQXBwZWFyYW5jZSgpO1xuICAgIH1cbiAgfVxuXG4gIC8vIERpc2FibGVkIFN0YXRlXG4gIEBJbnB1dCgpXG4gIEBIb3N0QmluZGluZygnY2xhc3MuZGlzYWJsZWQnKVxuICBnZXQgZGlzYWJsZWQoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuX2Rpc2FibGVkO1xuICB9XG4gIHNldCBkaXNhYmxlZCh2YWx1ZTogYm9vbGVhbikge1xuICAgIHRoaXMuX2Rpc2FibGVkID0gISF2YWx1ZTtcbiAgfVxuXG4gIEBDb250ZW50Q2hpbGRyZW4oZm9yd2FyZFJlZigoKSA9PiBOb3ZvUHJvZ3Jlc3NCYXJFbGVtZW50KSwgeyBkZXNjZW5kYW50czogdHJ1ZSB9KVxuICBfYmFyczogUXVlcnlMaXN0PE5vdm9Qcm9ncmVzc0JhckVsZW1lbnQ+O1xuXG4gIG5nQWZ0ZXJDb250ZW50SW5pdCgpIHtcbiAgICB0aGlzLl91cGRhdGVCYXJSYWRpdXMoKTtcbiAgfVxuXG4gIHByaXZhdGUgX3VwZGF0ZUJhckFwcGVhcmFuY2UoKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuX2JhcnMpIHtcbiAgICAgIHRoaXMuX2JhcnMuZm9yRWFjaCgoYmFyKSA9PiB7XG4gICAgICAgIGJhci5hcHBlYXJhbmNlID0gdGhpcy5hcHBlYXJhbmNlIGFzIFByb2dyZXNzQXBwZWFyYW5jZTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgX3VwZGF0ZUJhclJhZGl1cygpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5fYmFycykge1xuICAgICAgdGhpcy5fYmFycy5mb3JFYWNoKChiYXIsIGkpID0+IHtcbiAgICAgICAgYmFyLnJhZGl1cyA9IHRoaXMucmFkaXVzIC0gaSAqIDU7XG4gICAgICB9KTtcbiAgICB9XG4gIH1cbn1cbiJdfQ==